import { Module } from "@nestjs/common";
import { Task } from "./task.entity";
import { TaskController } from "./task.controller";
import { TaskService } from "./task.service";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([Task])],
    controllers: [TaskController],
    providers: [TaskService],
})
export class TaskModule {}