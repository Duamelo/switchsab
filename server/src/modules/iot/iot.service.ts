import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { connect } from 'mqtt';
import { error, info } from 'ps-logger';
import { Repository } from 'typeorm';
import Poste from '../postes/poste.entity';
import FreePost from '../freepost/freepost.entity';

@Injectable()
export class IotService implements OnModuleInit {
  private mqttClient;

  constructor(
    private readonly configService: ConfigService,
    @InjectRepository(FreePost)
    private freepostesRepository: Repository<FreePost>,
    @InjectRepository(Poste)
    private postesRepository: Repository<Poste>,
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

        const freepost_exist = await this.freepostesRepository.find({
          where: { id_object: Number(message) },
        });

        const attribute_post = await this.postesRepository.find({
          where: { object_id: Number(message) },
        });

        if (!freepost_exist.length && !attribute_post.length) {
          const _freepost = await this.freepostesRepository.create({
            id_object: Number(message),
          });

          await this.freepostesRepository.save(_freepost);
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
