import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { TaskService } from "./task.service";
import { CreateTaskDto } from "./dto/create-task.dto";

@Controller('tasks')
export class TaskController {
    constructor(private readonly taskService: TaskService){}

    @Post()
    create(@Body() createTaskDto: CreateTaskDto) {
        return this.taskService.create(createTaskDto);
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
    async updateTask(@Param('id') id: number, @Body() updateTaskDto: CreateTaskDto) {
        return this.taskService.updateTask(+id, updateTaskDto);
    }

    // TODO @Delete('id')
}