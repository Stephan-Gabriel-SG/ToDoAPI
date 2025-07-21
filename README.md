# API TodoList

Une API RESTful pour la gestion de tâches (todos) avec système de priorités, tags et favoris.

## 📌 Fonctionnalités

- ✅ CRUD complet pour les tâches
- 🔍 Filtrage avancé (tag, statut, priorité, recherche)
- 🏷️ Gestion des tags
- ⭐ Marquer les favoris
- 🔒 Validation des données côté serveur

## 🔧 Technologies

- **Backend**: NestJS
- **Base de données**: Static
- **Validation**: class-validator, class-transformer
- **Documentation**: Manuel

## Fichier statique interactif

Ce projet inclut un petit fichier front-end en HTML et CSS, conçu pour permettre aux utilisateurs de tester facilement les fonctionnalités. Il est divisé en deux sections principales

### 1- Accueil :

- Interface intuitive pour créer et gérer des tâches (ToDo).Toutes les fonctionnalités essentielles sont incluses :
- **ajout, édition, suppression, marquage comme terminé, etc**.
- Expérience utilisateur fluide et responsive, idéale pour une prise en main rapide

> 🔧 Lien de test en local : **[http://localhost:3000](http://localhost:3000)**

![home page](/docs/home.png)

### 2- Documentation :

- Interface intégrée permettant de tester directement l’API.
- Les utilisateurs peuvent explorer les différentes routes et interagir avec les données.
- Une manière simple et efficace de comprendre le fonctionnement côté back-end.

> 🔧 Lien de test en local : [http://localhost:3000/docs.html](http://localhost:3000/docs.html)  
> ⚠️ Assurez-vous que le serveur soit lancé en local pour accéder à la documentation.

![doc api](/docs/doc-2.png)
![doc api](/docs/doc-1.png)

## 🏁 Installation

```bash
    # Cloner le dépôt
    git clone https://github.com/usdscommunity/c2-backend-semaine2-codechallenge-Stephan-Gabriel-SG.git

    # Se déplacer dans le dossier
    cd c2-backend-semaine2-codechallenge-Stephan-Gabriel-SG

    # Installer les dépendances
    npm install

    # Démarrer le serveur
    npm run start:dev
```

### L'API fonctionne sur **[http://localhost:3000](http://localhost:3000)** par défaut.

## 📮 Endpoints disponibles

| Méthode    | Endpoint   | Description                    |
| ---------- | ---------- | ------------------------------ |
| **GET**    | /todos     | Récupère toutes les tâches     |
| **GET**    | /todos:id  | Récupère une tâche par ID      |
| **POST**   | /todos     | Crée une nouvelle tâche        |
| **PATCH**  | /todos/:id | Met à jour une tâche existante |
| **DELETE** | /todos/:id | Supprime une tâche par ID      |

## 🔍 Filtres disponibles sur **GET /todos**

Tu peux affiner les résultats avec des query parameters :

| Paramètre       | Type    | Description                                  |
| --------------- | ------- | -------------------------------------------- |
| **tag**         | string  | Filtre par tag spécifique                    |
| **isCompleted** | boolean | true ou false selon si la tâche est terminée |
| **isFavoris**   | boolean | Filtre les tâches mises en favoris           |
| **priority**    | string  | Filtre selon la priorité (low, medium, high) |

Exemple

```sh
GET /todos?tag=projet&isCompleted=false&isFavoris=true&priority=high
```

## 📊 Modèle de Données

Structure Todo

```json
    interface Todo {
        id: number;                   // Identifiant unique
        title: string;                // Titre de la tâche (3-100 caractères)
        description?: string;         // Description optionnelle (min 10 caractères)
        priority: 'low' | 'medium' | 'high';  // Niveau de priorité
        tags: string[];               // Tableau de tags (chaque tag doit être unique)
        isFavorite: boolean;          // Tâche favorite
        isCompleted: boolean;         // Tâche complétée
        createdAt: string;            // Date de création (ISO 8601)
        updatedAt: string;            // Date de modification (ISO 8601)
        }
```

## 📨 Exemple de Requêtes

Création d'une tâche

```json
    POST /todos
    Content-Type: application/json

    {
        "title": "Finaliser le projet",
        "description": "Terminer la documentation technique",
        "priority": "high",
        "tags": ["work", "urgent"],
        "isFavorite": true
    }
```

Réponse réussie

```json
{
  "success": true,
  "message": "Tâche créée avec succès",
  "data": {
    "id": 1,
    "title": "Finaliser le projet",
    "description": "Terminer la documentation technique",
    "priority": "high",
    "tags": ["work", "urgent"],
    "isFavorite": true,
    "isCompleted": false,
    "createdAt": "2023-05-20T14:30:00.000Z",
    "updatedAt": "2023-05-20T14:30:00.000Z"
  }
}
```

## 🚨 Gestion des Erreurs

```json
{
  success: false;
  error: {
    code: string;         // Code d'erreur (ex: "VALIDATION_ERROR")
    message: string;      // Message d'erreur global
    details?: Array<{     // Détails optionnels
      field: string;      // Champ concerné
      code: string;      // Type d'erreur
      message: string;   // Message spécifique
    }>;
  };
  timestamp: string;      // Horodatage de l'erreur
}
```

Exemple d'erreur

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Erreur de validation des données",
    "details": [
      {
        "field": "title",
        "code": "minLength",
        "message": "Le titre doit contenir au moins 3 caractères"
      },
      {
        "field": "priority",
        "code": "isEnum",
        "message": "La priorité doit être l'une des valeurs suivantes: low, medium, high"
      }
    ]
  },
  "timestamp": "2023-05-20T14:35:22.000Z"
}
```

## 📜 Licence

MIT **© Stéphan Gabriel NANDRASANTSOA**

```
    Améliorations apportées :
    1. Structure plus visuelle avec des emojis et tableaux
    2. Documentation complète des types de données
    3. Exemples clairs de requêtes/réponses
    4. Meilleure organisation des sections
    5. Ajout des structures d'erreur
    6. Informations plus détaillées sur les validations
    7. Formatage cohérent

    Vous pouvez copier ce Markdown directement dans votre fichier README.md.
```
