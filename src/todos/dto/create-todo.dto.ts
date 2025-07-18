import {
  IsString,
  IsNotEmpty,
  MinLength,
  MaxLength, // Ajout de MaxLength pour le titre
  IsOptional, // Pour les champs optionnels
  IsBoolean, // Pour isFavorite
  IsArray, // Pour les tags
  ArrayUnique, // Pour s'assurer que les tags sont uniques
  IsEnum, // Si la priorité est une valeur fixe (ex: 'low', 'medium', 'high')
} from 'class-validator';
import { Type } from 'class-transformer'; // Pour la transformation des dates et des booleens

// Optionnel: Si vous avez des priorités fixes, définissez un enum
// C'est une bonne pratique pour éviter des valeurs arbitraires
export enum TodoPriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}

export class CreateTodoDto {
  // --- Champs obligatoires et validés ---

  @IsString({ message: 'Le titre doit être une chaîne de caractères.' })
  @IsNotEmpty({ message: 'Le titre est obligatoire.' })
  @MinLength(3, { message: 'Le titre est trop court (min 3 caractères).' })
  @MaxLength(100, { message: 'Le titre est trop long (max 100 caractères).' })
  title: string;

  @IsString({ message: 'La priorité doit être une chaîne de caractères.' })
  @IsEnum(TodoPriority, {
    message: 'La priorité doit être "low", "medium" ou "high".',
  })
  priority: TodoPriority = TodoPriority.MEDIUM;

  // --- Champs optionnels et avec valeurs par défaut ---

  @IsString({ message: 'La description doit être une chaîne de caractères.' })
  @MinLength(10, { message: 'Description trop courte (min 10 caractères).' })
  @IsOptional()
  description?: string;

  @IsArray({ message: 'Les tags doivent être un tableau de chaînes.' })
  @IsString({
    each: true,
    message: 'Chaque tag doit être une chaîne de caractères.',
  })
  @ArrayUnique({ message: 'Les tags ne doivent pas contenir de doublons.' })
  @IsOptional()
  tags?: string[];

  @IsBoolean({ message: 'isFavorite doit être un booléen.' })
  @IsOptional()
  @Type(() => Boolean)
  isFavorite?: boolean;

  @IsBoolean({ message: 'isCompleted doit être un booléen.' })
  @IsOptional()
  @Type(() => Boolean)
  isCompleted?: boolean;
}
