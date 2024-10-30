import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrossmintService } from './crossmint/crossmint.service';
import { CrossmintController } from './crossmint/crossmint.controller';

@Module({
  imports: [],
  controllers: [AppController, CrossmintController],
  providers: [AppService, CrossmintService],
})
export class AppModule {}
