import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { StatusService } from './status.service';
import { CreateStatusDto } from './dto/create-status.dto';

@ApiTags('status')
@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Get()
  @ApiOperation({ summary: 'Get all statuses' })
  findAll() {
    return this.statusService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create a status' })
  create(@Body() dto: CreateStatusDto) {
    return this.statusService.create(dto);
  }
}
