import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserDto } from '../dto/user.dto';
import { User } from '../entity/user';

import { UserService } from '../service/user.service';

@Controller('Users')
export class UserController {
  constructor(private usersService: UserService) {}

  @Post('/')
  async create(@Body() user: User): Promise<UserDto> {
    return this.usersService.create(user);
  }

  @Get('/')
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
