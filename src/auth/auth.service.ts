import { Injectable } from '@nestjs/common';
import { EmailService } from 'src/email/email.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly emailService: EmailService,
    private jwtService: JwtService
  ) {}

  async login(createAuthDto: CreateAuthDto) {
    const jwtPayload = { time: new Date().toUTCString(), email: createAuthDto.email };
    const token = await this.jwtService.signAsync(jwtPayload);
    await this.emailService.sendMail(createAuthDto.email, 'login', `login token: ${token}`);
    return {};
  }
}
