# API TodoList

Une API RESTful pour la gestion de tâches (todos) avec système de priorités, tags et favoris.

## 📌 Fonctionnalités

- ✅ CRUD complet pour les tâches
- 🔍 Filtrage avancé (tag, statut, priorité, recherche)
- 🏷️ Gestion des tags
- ⭐ Marquer les favoris
- 🔒 Validation des données côté serveur
- 📊 Pagination intégrée

## 🔧 Technologies

- **Backend**: Node.js, NestJS
- **Base de données**: Static
- **Validation**: class-validator, class-transformer
- **Documentation**: Manuel

## L'API fonctionne sur `http://localhost:3000` par défaut.

| Méthode | Endpoint   | Description                    |
| ------- | ---------- | ------------------------------ |
| GET     | /todos     | Récupère toutes les tâches     |
| POST    | /todos     | Crée une nouvelle tâche        |
| PATCH   | /todos/:id | Met à jour une tâche existante |
| DELETE  | /todos/:id | Supprime une tâche par ID      |
