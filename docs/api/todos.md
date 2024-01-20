---
id: todo_items
title: Todo Items
description: The API for Todo Items
tags:
  - Backend
  - API
  - Todo Items
sidebar_position: 1
---

# Todo Items

## Get all Todos

|        |              |
| ------ | ------------ |
| Method | GET          |
| Route  | `/api/todos` |

## Get a Todo

|        |                       |
| ------ | --------------------- |
| Method | GET                   |
| Route  | `/api/todos/{id:int}` |

## Search Todos

|        |                     |
| ------ | ------------------- |
| Method | GET                 |
| Route  | `/api/todos/search` |

**Query Parameters:**

| Key | Type |
| --- | ---- |
| q   | str  |

## Create a Todo

|         |                     |
| ------- | ------------------- |
| Method  | POST                |
| Route   | `/api/todos/create` |
| Payload | Object              |

**Payload:**

| Property  | Type                           | Notes    |
| --------- | ------------------------------ | -------- |
| category  | int (FK todo_category) \| null | optional |
| todo      | str                            |          |
| completed | bool                           | optional |

## Update a Todo

|         |                       |
| ------- | --------------------- |
| Method  | PUT                   |
| Route   | `/api/todos/{id:int}` |
| Payload | Object                |

**Payload** (***At least one** of the following properties*):

| Property  | Type                           | Notes |
| --------- | ------------------------------ | ----- |
| category  | int (FK todo_category) \| null |       |
| todo      | str                            |       |
| completed | bool                           |       |


## Delete a Todo

|        |                       |
| ------ | --------------------- |
| Method | DELETE                |
| Route  | `/api/todos/{id:int}` |
