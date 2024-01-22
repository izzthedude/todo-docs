---
id: item
title: Item
description: The API for Todo Items
tags:
  - Backend
  - API
  - Item
sidebar_position: 1
---

# Item

## Get all Items

|        |              |
| ------ | ------------ |
| Method | GET          |
| Route  | `/api/todos` |

## Get an Item

|        |                       |
| ------ | --------------------- |
| Method | GET                   |
| Route  | `/api/todos/{id:int}` |

## Get Items by Category

|        |                                |
| ------ | ------------------------------ |
| Method | GET                            |
| Route  | `/api/todos/category/{id:int}` |

## Search Items

|        |              |
| ------ | ------------ |
| Method | GET          |
| Route  | `/api/todos` |

**Query Parameters:**

| Key | Type | Description                         |
| --- | ---- | ----------------------------------- |
| q   | str  | Search for Items matching the query |

## Create an Item

|         |              |
| ------- | ------------ |
| Method  | POST         |
| Route   | `/api/todos` |
| Payload | Object       |

**Payload:**

| Property  | Type                   | Notes    |
| --------- | ---------------------- | -------- |
| category  | int (FK todo_category) | optional |
| todo      | str                    |          |
| completed | bool                   | optional |

## Update an Item

|         |                       |
| ------- | --------------------- |
| Method  | PUT, PATCH            |
| Route   | `/api/todos/{id:int}` |
| Payload | Object                |

**Payload** (***At least one** of the following properties*):

| Property  | Type                   | Notes |
| --------- | ---------------------- | ----- |
| category  | int (FK todo_category) |       |
| todo      | str                    |       |
| completed | bool                   |       |


## Delete an Item

|        |                       |
| ------ | --------------------- |
| Method | DELETE                |
| Route  | `/api/todos/{id:int}` |
