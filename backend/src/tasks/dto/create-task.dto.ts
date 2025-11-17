import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'Buy groceries', description: 'Short title for the task' })
  title!: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'Milk, eggs, bread', description: 'Optional longer description', required: false })
  description?: string;
}
