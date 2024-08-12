import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':username')
  async findOne(@Param('username') username: string) {
    return this.usersService.findOne(username);
  }

  @Post()
  async createOne(@Body() user: any) {
    return this.usersService.createOne(user);
  }

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }
}
