import { Controller, Get, Post, Patch, Delete, Body, Param, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody, ApiQuery } from '@nestjs/swagger';

@Controller('tasks')
@ApiTags('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  @ApiOperation({ summary: 'Get all tasks' })
  @ApiQuery({ name: 'completed', required: false, description: 'Filter tasks by completion status', type: Boolean })
  @ApiResponse({ status: 200, description: 'List of tasks' })
  findAll(@Query('completed') completed?: string) {
    return this.tasksService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create a new task' })
  @ApiBody({ type: CreateTaskDto, description: 'Task payload' })
  @ApiResponse({ status: 201, description: 'Task created' })
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an existing task' })
  @ApiResponse({ status: 200, description: 'Task updated' })
  @ApiParam({ name: 'id', description: 'Task id to update', example: '1' })
  @ApiBody({ type: UpdateTaskDto, description: 'Fields to update' })
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(id, updateTaskDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a task' })
  @ApiResponse({ status: 200, description: 'Task deleted' })
  @ApiParam({ name: 'id', description: 'Task id to delete', example: '64f0a1c123abcde123456789' })
  delete(@Param('id') id: string) {
    return this.tasksService.delete(id);
  }
}
