import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ErrorResponse, SuccessResponse, todoList } from 'src/types/todos';

@Injectable()
export class TodosService {
  private todos: todoList = [];
  create(createTodoDto: CreateTodoDto) {
    this.todos.push({
      id: this.todos.length > 0 ? Number(this.todos.at(-1)?.id) + 1 : 1,
      ...createTodoDto,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    return {
      success: true,
      data: this.todos.at(-1),
    };
  }

  findAll() {
    return `This action returns all todos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
