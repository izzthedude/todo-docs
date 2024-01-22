---
id: category
title: Category
description: The API for Todo Categories
tags:
  - Backend
  - API
  - Category
sidebar_position: 1
---

# Category

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

|         |                   |
| ------- | ----------------- |
| Method  | POST              |
| Route   | `/api/categories` |
| Payload | Object            |

**Payload:**

| Property | Type | Notes |
| -------- | ---- | ----- |
| name     | str  |       |

## Update a Category

|         |                            |
| ------- | -------------------------- |
| Method  | PUT                        |
| Route   | `/api/categories/{id:int}` |
| Payload | Object                     |

**Payload:**

| Property | Type | Notes |
| -------- | ---- | ----- |
| name     | str  |       |

## Delete a Category

|        |                            |
| ------ | -------------------------- |
| Method | DELETE                     |
| Route  | `/api/categories/{id:int}` |

