import { NotificationsModule } from './modules/notifications/notifications.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { globalModules } from './modules/global';
import { featureModules } from './modules';

@Module({
  imports: [NotificationsModule, ...featureModules, ConfigModule.forRoot(), ...globalModules],
  controllers: [],
  providers: [],
})
export class AppModule {}
