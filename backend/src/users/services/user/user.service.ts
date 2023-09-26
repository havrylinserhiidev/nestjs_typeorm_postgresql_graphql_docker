import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../../entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserInput } from '../../inputs/create-user.input';
import { UpdateUserInput } from '../../inputs/update-user.input';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(createUserInput: CreateUserInput) {
    return this.userRepository.save({ ...createUserInput });
  }

  async getOneUser(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  async getAllUser() {
    return this.userRepository.find();
  }

  async removeUser(id: number) {
    await this.userRepository.delete({ id });
    return id;
  }

  async updateUser(updateUserInput: UpdateUserInput) {
    await this.userRepository.update(
      { id: updateUserInput.id },
      { ...updateUserInput },
    );
    return this.getOneUser(updateUserInput.id);
  }
}
