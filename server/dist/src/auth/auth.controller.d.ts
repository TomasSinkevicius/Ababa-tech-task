import { Request } from 'express';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { Tokens } from './types/tokens.type';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signupLocal(dto: AuthDto): Promise<Tokens>;
    signinLocal(dto: AuthDto): Promise<Tokens>;
    signinLocall(body: any): string;
    logout(req: Request): Promise<void>;
    refreshTokens(req: Request): Promise<Tokens>;
}
