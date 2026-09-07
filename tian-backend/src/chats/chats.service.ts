import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SendMessageDto } from './dto/send-message.dto';

@Injectable()
export class ChatsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.chat.findMany({
      include: {
        messages: true,
        participants: true,
      },
    });
  }

  async findOne(id: string) {
    const chat = await this.prisma.chat.findUnique({
      where: { id },
      include: {
        messages: true,
        participants: true,
      },
    });

    if (!chat) {
      throw new NotFoundException('Chat not found');
    }

    return chat;
  }

  async sendMessage(chatId: string, dto: SendMessageDto) {
    const chat = await this.prisma.chat.findUnique({ where: { id: chatId } });

    if (!chat) {
      throw new NotFoundException('Chat not found');
    }

    return this.prisma.message.create({
      data: {
        chatId,
        senderId: dto.senderId,
        body: dto.body,
        status: dto.status ?? 'SENT',
      },
    });
  }
}
