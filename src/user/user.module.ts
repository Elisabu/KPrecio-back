import { Module } from '@nestjs/common';
import { userProviders } from './providers';

const providers = userProviders;

@Module({
  imports: [],
  controllers: [],
  providers,
})
export class UserModule {}
