import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { connect } from 'mqtt';
import { error, info } from 'ps-logger';
import { Repository } from 'typeorm';
import Groupe from '../groupes/groupe.entity';
import Poste from '../postes/poste.entity';
import Souscription from '../souscriptions/souscription.entity';
import User from '../users/user.entity';

@Injectable()
export class IotService implements OnModuleInit {
  private mqttClient;

  constructor(
    private readonly configService: ConfigService,
    @InjectRepository(Poste)
    private postesRepository: Repository<Poste>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Groupe)
    private groupRepository: Repository<Groupe>,
    @InjectRepository(Souscription)
    private souscriptionRepository: Repository<Souscription>,
  ) {}

  async onModuleInit() {
    const host = 'localhost';
    const port = '1883';
    const clientId = `mqtt_${Math.random().toString(16).slice(3)}`;

    const connectUrl = `mqtt://${host}:${port}`;

    this.mqttClient = connect(connectUrl, {
      clientId,
      clean: true,
      connectTimeout: 4000,
      reconnectPeriod: 1000,
    });

    this.mqttClient.on('connect', function () {
      info('Connected to mqtt broker');
    });

    this.mqttClient.on('error', function () {
      error('Error in connecting to mqtt broker');
    });

    this.mqttClient.subscribe('poste_disponible');

    this.mqttClient.on('message', async (topic, message) => {
      if (topic == 'poste_disponible') {
        console.log('id_poste is ' + message);
        console.log('topic is ' + topic);

        const poste_attribue = await this.postesRepository.findOne({
          where: { object_id: Number(message) },
        });

        if (!poste_attribue) {
          const poste = await this.postesRepository.findOne({
            where: { object_id: null },
          });
          console.log('poste libre');
          console.log(poste);
          if (poste) {
            poste.object_id = Number(message);
            await poste.save();
          }
        }
      }
    });

    const all_postes = await this.postesRepository.find();
    console.log(all_postes);

    all_postes.map((poste) => {
      this.mqttClient.publish(`${poste.object_id}_object`, 'nom-' + poste.nom);
      this.mqttClient.publish(
        `${poste.object_id}_object`,
        'stat-' + poste.status,
      );
      this.mqttClient.publish(`${poste.object_id}_object`, 'nom-' + poste.nom);
    });
  }

  publish(topic: string, payload: string): string {
    info(`Publishing to ${topic}`);

    this.mqttClient.publish(topic, payload);

    return `Publishing to ${topic}`;
  }

  async subscribe(topic: string): Promise<string> {
    info(`Subscribing to ${topic}`);
    return `Subscribing to ${topic}`;
  }
}
