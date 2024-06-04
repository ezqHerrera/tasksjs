import { Injectable } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { EntityManager, Repository } from "typeorm";
import { Task } from "./task.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(Task)
        private taskRepository: Repository<Task>,
        private readonly entityManager: EntityManager
    ){}

    async create(createTaskDto: CreateTaskDto) {
        const task = new Task(createTaskDto);
        await this.entityManager.save(task);
    }

    getAllTasks() {
        return this.taskRepository.find()
    }

    async getTaskById(id: number) {
        return this.taskRepository.findOneBy({id});
    }

    async updateTask(id: number, updateTaskDto: CreateTaskDto) {
        const task = await this.taskRepository.findOneBy({id});
        task.title = updateTaskDto.title;
        task.description = updateTaskDto.description;
        task.state = updateTaskDto.state;
        await this.entityManager.save(task);
    }

    async deleteTask(id: number) {
        const task = await this.taskRepository.findOneBy({id});
        return this.taskRepository.delete(task.id);
    }
}