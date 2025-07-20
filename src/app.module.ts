import { Module } from '@nestjs/common';
import { TodosModule } from './todos/todos.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'public') }),
    TodosModule,
  ],
})
export class AppModule {}
