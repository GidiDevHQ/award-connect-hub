import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateStatusDto } from './dto/create-status.dto';

@Injectable()
export class StatusService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.status.findMany({
      include: {
        items: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async create(dto: CreateStatusDto) {
    return this.prisma.status.create({
      data: {
        authorId: dto.authorId,
        items: {
          create: dto.items,
        },
      },
    });
  }
}
