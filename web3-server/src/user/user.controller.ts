import { Controller, Get, Post, HttpCode } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private usersService: UserService) {}

  @HttpCode(200)
  @Get()
  getUserList() {
    return this.usersService.getUser();
  }
}
