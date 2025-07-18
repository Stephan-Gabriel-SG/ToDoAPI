import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import {
  ErrorResponse,
  filter,
  SuccessResponse,
  todoList,
} from 'src/types/todos';

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
      isFavorite,
      isCompleted,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    return {
      success: true,
      data: this.todos.at(-1),
    };
  }

  findAll(filter: filter): SuccessResponse {
    const { tag, priority, isFavorite, isCompleted, search } = filter;

    const filteredTodos = this.todos.filter((todo) => {
      // Filtre par tag si spécifié
      if (tag && !todo.tags?.includes(tag)) return false;

      // Filtre par priorité si spécifiée
      if (priority && todo.priority !== priority.toLowerCase()) return false;

      // Filtre par favori si spécifié
      if (isFavorite !== undefined && `${todo.isFavorite}` !== isFavorite)
        return false;

      // Filtre par complétion si spécifiée
      if (isCompleted !== undefined && `${todo.isCompleted}` !== isCompleted)
        return false;

      // Filtre par recherche si spécifiée
      if (search) {
        const searchTerm = search.toLowerCase();
        const titleMatch = todo.title.toLowerCase().includes(searchTerm);
        const descMatch =
          todo.description?.toLowerCase().includes(searchTerm) || false;
        if (!titleMatch && !descMatch) return false;
      }

      return true;
    });
    return {
      success: true,
      message: `Liste des todos filtrée par ${JSON.stringify(filter)}.`,
      data: filteredTodos,
    };
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

  update(
    id: number,
    updateTodoDto: UpdateTodoDto,
  ): SuccessResponse | ErrorResponse {
    const todo = this.todos.find((todo) => todo.id === Number(id));
    if (!todo) {
      return {
        success: false,
        error: {
          code: 'NOT_FOUND',
          message: 'Le todo n’a pas été trouvé.',
        },
        timestamp: new Date().toISOString(),
      };
    }
    const updatedTodo = {
      ...todo,
      ...updateTodoDto,
      updatedAt: new Date().toISOString(),
    };
    this.todos = this.todos.map((todo) => {
      if (todo.id === Number(id)) {
        return updatedTodo;
      }
      return todo;
    });
    return {
      success: true,
      message: `Le todo avec l'id ${id} a bien été mis à jour.`,
      data: updatedTodo,
    };
  }

  remove(id: number): SuccessResponse | ErrorResponse {
    const todoToBeDeleted = this.todos.find((todo) => todo.id === Number(id));
    if (!todoToBeDeleted) {
      return {
        success: false,
        error: {
          code: 'NOT_FOUND',
          message: 'Le todo n’a pas été trouvé.',
        },
        timestamp: new Date().toISOString(),
      };
    }
    this.todos = this.todos.filter((todo) => todo.id !== Number(id));
    return {
      success: true,
      message: `Le todo avec l'id ${id} a bien été supprimé.`,
      data: todoToBeDeleted,
    };
  }
}
