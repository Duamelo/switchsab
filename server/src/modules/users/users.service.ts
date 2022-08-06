import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import User from './user.entity';
import CreateUserDto from './dto/createUser.dto';
import * as bcrypt from 'bcrypt';
import UpdateUserDto from './dto/updateUser.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async getByPseudo(pseudo: string) {
    const user = await this.usersRepository.findOneBy({ pseudo });
    if (user) {
      return user;
    }
    throw new HttpException(
      'User with this pseudo does not exist',
      HttpStatus.NOT_FOUND,
    );
  }

  async getByIds() {
    return await this.usersRepository.find();
  }

  async getById(id: number) {
    const user = await this.usersRepository.findOneBy({ id });
    if (user) {
      return user;
    }
    throw new HttpException(
      'User with this id does not exist',
      HttpStatus.NOT_FOUND,
    );
  }

  async create(userData: CreateUserDto) {
    const newUser = await this.usersRepository.create({
      ...userData,
    });

    await this.usersRepository.save(newUser);
    return newUser;
  }

  async setCurrentRefreshToken(refreshToken: string, userId: number) {
    const currentHashedRefreshToken = await bcrypt.hash(refreshToken, 10);
    await this.usersRepository.update(userId, {
      currentHashedRefreshToken,
    });
  }

  async getUserIfRefreshTokenMatches(refreshToken: string, userId: number) {
    const user = await this.getById(userId);

    const isRefreshTokenMatching = await bcrypt.compare(
      refreshToken,
      user.currentHashedRefreshToken,
    );

    if (isRefreshTokenMatching) {
      return user;
    }
  }

  async removeRefreshToken(userId: number) {
    return this.usersRepository.update(userId, {
      currentHashedRefreshToken: null,
    });
  }

  public async delete(id: number) {
    const user = await this.usersRepository.find({ where: { id: id } });

    if (user.length != 0) {
      const deletedUser = await this.usersRepository.delete(id);
      if (!deletedUser.affected)
        throw new HttpException('Failed to delete', HttpStatus.NOT_FOUND);
      else throw new HttpException('user deleted', HttpStatus.FOUND);
    }
    throw new HttpException('uuser not found', HttpStatus.NOT_FOUND);
  }

  public async update(id: number, user: UpdateUserDto) {
    const _user = await this.usersRepository.find({ where: { id: id } });

    if (_user.length != 0) {
      const user_pseudo = await this.usersRepository.find({
        where: { pseudo: user.pseudo },
      });

      const hashPassword = await bcrypt.hash(user.password, 15);
      user.password = hashPassword;

      if (user_pseudo.length == 0) {
        await this.usersRepository.update(id, user);

        const updatedclient = await this.usersRepository.findOne({
          where: { id: id },
        });

        if (updatedclient) {
          return updatedclient;
        }
        throw new HttpException('Failed to update', HttpStatus.NOT_FOUND);
      }
    }
  }
}
