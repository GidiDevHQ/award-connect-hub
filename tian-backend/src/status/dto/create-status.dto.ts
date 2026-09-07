import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString, ValidateNested, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';

export enum StatusKindValue {
  TEXT = 'TEXT',
  PHOTO = 'PHOTO',
  VIDEO = 'VIDEO',
}

class StatusItemDto {
  @ApiProperty({ enum: StatusKindValue })
  @IsEnum(StatusKindValue)
  kind!: StatusKindValue;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  src?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  caption?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  alt?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  background?: string;
}

export class CreateStatusDto {
  @ApiProperty()
  @IsString()
  authorId!: string;

  @ApiProperty({ type: [StatusItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => StatusItemDto)
  items!: StatusItemDto[];
}
