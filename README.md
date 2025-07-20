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

[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/0tGge6m5)

---
