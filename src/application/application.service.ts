import { Injectable } from '@nestjs/common';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ApplicationService {
  constructor(private prisma: PrismaService) {}
  async create(createApplicationDto: CreateApplicationDto) {
    try {
      return this.prisma.application.create({
        data: { ...createApplicationDto },
      });
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      return await this.prisma.application.findMany();
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: number) {
    try {
      return await this.prisma.application.findUnique({
        where: {
          id,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, updateApplicationDto: UpdateApplicationDto) {
    try {
      return await this.prisma.application.update({
        where: {
          id,
        },
        data: updateApplicationDto,
      });
    } catch (error) {
      throw error;
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.application.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}
