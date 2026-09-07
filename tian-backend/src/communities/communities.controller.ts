import { Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CommunitiesService } from './communities.service';

@ApiTags('communities')
@Controller('communities')
export class CommunitiesController {
  constructor(private readonly communitiesService: CommunitiesService) {}

  @Get()
  @ApiOperation({ summary: 'List all communities' })
  findAll() {
    return this.communitiesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get community by id' })
  findOne(@Param('id') id: string) {
    return this.communitiesService.findOne(id);
  }

  @Post(':id/join')
  @ApiOperation({ summary: 'Join a community' })
  join(@Param('id') id: string) {
    return this.communitiesService.join(id);
  }
}
