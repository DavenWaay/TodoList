import { IsOptional, IsString, IsBoolean } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateTaskDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ example: 'Walk the dog', description: 'Updated title for the task' })
  title?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ example: 'Evening around the park', description: 'Updated description', required: false })
  description?: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional({ example: false, description: 'Mark task completed or not', required: false })
  completed?: boolean;
}
