import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import { Tokens } from './types/tokens.type';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    signupLocal(dto: AuthDto): Promise<Tokens>;
    signinLocal(dto: AuthDto): Promise<Tokens>;
    logout(userId: number): Promise<void>;
    refreshTokens(userId: number, rt: string): Promise<Tokens>;
    updateRtHash(userId: number, rt: string): Promise<void>;
    hashData(data: string): Promise<string>;
    getTokens(userId: number, username: string): Promise<Tokens>;
}
