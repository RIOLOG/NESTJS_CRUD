import { Module } from '@nestjs/common';
// import { UserController } from './user.controller';
import { albumController } from './album.controller';
import { UsersController } from './users.controller';


@Module({
  imports: [],
  controllers: [albumController, UsersController],
  providers: [],
})
export class AppModule {}
