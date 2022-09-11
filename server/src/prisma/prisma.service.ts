import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      datasources: {
        db: {
          url: 'postgresql://adpyimgonshdiw:b01aaf6cf34458dce166261c3cb94a84d543e4787db4cca886992f6d2a0a4bf0@ec2-3-217-14-181.compute-1.amazonaws.com:5432/d1lk7164rufht5?schema=public',
        },
      },
    });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
