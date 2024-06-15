import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { TaskModule } from './task/task.module';
import { Task } from './task/task.entity';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'tpnestmysql',
      entities: [Task],
      synchronize: true
    }),

    WinstonModule.forRoot({
      level: 'info',
      format: winston.format.json(),
      defaultMeta: { service: 'user-service' },
      transports: [
          /**
           * escribe los registros a un archivo según su nivel
           * los errores tienen su propio archivo
           */
          new winston.transports.Console(),
          new winston.transports.File({ filename: 'error.log', level: 'error' }),
          new winston.transports.File({ filename: 'combined.log' }),
      ],
    }),

    TaskModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
