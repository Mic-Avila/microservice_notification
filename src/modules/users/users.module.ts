import { Module,  } from '@nestjs/common';
import { UsersService } from './users.service';
import UsersExternalController from './users.external.controller';
import { UsersRepository } from './repositories/users.reposity';


@Module({
  controllers: [UsersExternalController],
  providers: [UsersService, UsersRepository],
})
export class UsersModule {}
