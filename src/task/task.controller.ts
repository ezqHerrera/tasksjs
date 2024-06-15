import { Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { TaskService } from "./task.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { WINSTON_MODULE_NEST_PROVIDER } from "nest-winston";
import { Logger } from "winston";

@Controller('tasks')
export class TaskController {
    constructor(
        @Inject(WINSTON_MODULE_NEST_PROVIDER)
        private readonly logger: Logger,

        private readonly taskService: TaskService
    ){}

    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto) {
        return this.taskService.createTask(createTaskDto);
    }

    @Get()
    getAllTasks() {
        return this.taskService.getAllTasks();
    }

    @Get(':id')
    getTaskById(id: number) {
        return this.taskService.getTaskById(id);
    }

    @Patch(':id')
    async updateTask(@Param('id', ParseIntPipe) id: number, @Body() updateTaskDto: CreateTaskDto) {
        return this.taskService.updateTask(+id, updateTaskDto);
    }

    @Delete(':id')
    async deleteTask(@Param('id', ParseIntPipe) id: number) {
        return this.taskService.deleteTask(id);
    }
}