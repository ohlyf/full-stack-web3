import { Controller, Get, Post, HttpCode, Body } from '@nestjs/common';

import { UserService } from './user.service';
import { User } from './user.entity';
import { SignupDto } from './dto/signup.dto';

@Controller('user')
export class UserController {
  constructor(private usersService: UserService) {}

  @HttpCode(200)
  @Get()
  getUserList() {
    return this.usersService.getUser();
  }

  @Post('signup')
  signUp(@Body() signupDto: SignupDto) {
    // 密码加密
    return this.usersService.createUser(signupDto);
  }
}
