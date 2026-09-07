import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CommunitiesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.community.findMany({
      include: {
        moderators: true,
      },
    });
  }

  async findOne(id: string) {
    const community = await this.prisma.community.findUnique({
      where: { id },
      include: {
        moderators: true,
        posts: true,
      },
    });

    if (!community) {
      throw new NotFoundException('Community not found');
    }

    return community;
  }

  async join(id: string) {
    const community = await this.prisma.community.findUnique({ where: { id } });

    if (!community) {
      throw new NotFoundException('Community not found');
    }

    return {
      message: `Joined community ${community.name}`,
      communityId: community.id,
    };
  }
}
