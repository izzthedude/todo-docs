---
id: todo_categories
title: Todo Categories
description: The API for Todo Categories
tags:
  - Backend
  - API
  - Todo Categories
sidebar_position: 2
---

# Todo Categories

## Get all Categories

|        |                   |
| ------ | ----------------- |
| Method | GET               |
| Route  | `/api/categories` |

## Get a Category

|        |                            |
| ------ | -------------------------- |
| Method | GET                        |
| Route  | `/api/categories/{id:int}` |

## Create a Category

|        |                          |
| ------ | ------------------------ |
| Method | POST                     |
| Route  | `/api/categories/create` |

Payload:
```json
{
   name: str
}
```

## Update a Category

|        |                            |
| ------ | -------------------------- |
| Method | PUT                        |
| Route  | `/api/categories/{id:int}` |

Payload:
```json
{
   name: str
}
```

## Delete a Category

|        |                            |
| ------ | -------------------------- |
| Method | DELETE                     |
| Route  | `/api/categories/{id:int}` |

