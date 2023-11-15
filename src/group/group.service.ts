import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GroupService {
  constructor(private prisma: PrismaService) {}
  async create(createGroupDto: CreateGroupDto) {
    try {
      return await this.prisma.group.create({
        data: { ...createGroupDto },
      });
    } catch (error) {
      throw error;
    }
  }

  async addAppication(id: number, idApp: number) {
    try {
      return this.prisma.group.update({
        where: {
          id,
        },
        data: {
          Applications: {
            set: {
              id: idApp,
            },
          },
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      return await this.prisma.group.findMany();
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: number) {
    try {
      return await this.prisma.group.findUnique({
        where: {
          id,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, updateGroupDto: UpdateGroupDto) {
    try {
      return await this.prisma.group.update({
        where: {
          id,
        },
        data: updateGroupDto,
      });
    } catch (error) {
      throw error;
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.group.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}
