import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';

export enum MessageStatusValue {
  SENT = 'SENT',
  DELIVERED = 'DELIVERED',
  READ = 'READ',
}

export class SendMessageDto {
  @ApiProperty()
  @IsString()
  senderId!: string;

  @ApiProperty()
  @IsString()
  body!: string;

  @ApiProperty({ required: false, enum: MessageStatusValue })
  @IsOptional()
  @IsEnum(MessageStatusValue)
  status?: MessageStatusValue;
}
