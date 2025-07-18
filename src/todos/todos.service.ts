import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ErrorResponse, SuccessResponse, todoList } from 'src/types/todos';

@Injectable()
export class TodosService {
  private todos: todoList = [];
  create(createTodoDto: CreateTodoDto) {
    const { title, priority, description, tags, isFavorite, isCompleted } =
      createTodoDto;
    this.todos.push({
      id: this.todos.length > 0 ? Number(this.todos.at(-1)?.id) + 1 : 1,
      title,
      priority,
      description,
      tags,
      isFavorite: isFavorite ?? false,
      isCompleted: isCompleted ?? false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    return {
      success: true,
      data: this.todos.at(-1),
    };
  }

  findAll() {
    return this.todos;
  }

  findOne(id: number): SuccessResponse | ErrorResponse {
    const todo = this.todos.find((todo) => todo.id === Number(id));
    if (todo) {
      return {
        success: true,
        message: 'Le todo a bien été trouvé.',
        data: todo,
      };
    }
    return {
      success: false,
      error: {
        code: 'NOT_FOUND',
        message: 'Le todo n’a pas été trouvé.',
      },
      timestamp: new Date().toISOString(),
    };
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
