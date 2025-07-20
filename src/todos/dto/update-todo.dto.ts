import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from './create-todo.dto';
import { IsBoolean, IsEnum, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

// Enum pour les priorités
export enum TodoPriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}
export class UpdateTodoDto extends PartialType(CreateTodoDto) {
  @IsString({ message: 'La priorité doit être une chaîne de caractères.' })
  @IsEnum(TodoPriority, {
    message: 'La priorité doit être "low", "medium" ou "high".',
  })
  priority: TodoPriority;
  @IsBoolean({ message: 'isFavorite doit être un booléen.' })
  @IsOptional()
  @Type(() => Boolean)
  isFavorite?: boolean;

  @IsBoolean({ message: 'isCompleted doit être un booléen.' })
  @IsOptional()
  @Type(() => Boolean)
  isCompleted?: boolean;
}
