import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, MinLength, IsEnum } from 'class-validator';

export enum UserRoleValue {
  PARTICIPANT = 'PARTICIPANT',
  AWARD_LEADER = 'AWARD_LEADER',
  ASSESSOR = 'ASSESSOR',
  ALUMNI = 'ALUMNI',
  CENTRE = 'CENTRE',
  UNIVERSITY = 'UNIVERSITY',
}

export enum AwardLevelValue {
  BRONZE = 'BRONZE',
  SILVER = 'SILVER',
  GOLD = 'GOLD',
  COMPLETED = 'COMPLETED',
  NONE = 'NONE',
}

export class RegisterDto {
  @ApiProperty()
  @IsString()
  fullName!: string;

  @ApiProperty()
  @IsEmail()
  email!: string;

  @ApiProperty()
  @IsString()
  @MinLength(8)
  password!: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  username?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  country?: string;

  @ApiProperty({ required: false, enum: UserRoleValue })
  @IsOptional()
  @IsEnum(UserRoleValue)
  role?: UserRoleValue;

  @ApiProperty({ required: false, enum: AwardLevelValue })
  @IsOptional()
  @IsEnum(AwardLevelValue)
  awardLevel?: AwardLevelValue;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  centre?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  headline?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  bio?: string;
}
