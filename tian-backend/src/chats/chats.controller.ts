import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ChatsService } from './chats.service';
import { SendMessageDto } from './dto/send-message.dto';

@ApiTags('chats')
@Controller('chats')
export class ChatsController {
  constructor(private readonly chatsService: ChatsService) {}

  @Get()
  @ApiOperation({ summary: 'List chats' })
  findAll() {
    return this.chatsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a chat by id' })
  findOne(@Param('id') id: string) {
    return this.chatsService.findOne(id);
  }

  @Post(':id/messages')
  @ApiOperation({ summary: 'Send a message' })
  sendMessage(@Param('id') id: string, @Body() dto: SendMessageDto) {
    return this.chatsService.sendMessage(id, dto);
  }
}
