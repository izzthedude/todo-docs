---
id: models
title: Models
description: The models of the Todo app
tags:
  - Backend
  - Models
sidebar_position: 3
---

# Models

*I'm not entirely sure how to document models properly, so I'll just document this 
however makes the most sense to me lol.*

## Level 1

### Todo Category

Name: **todo_category**

| Field | Data Type   | Notes             |
| ----- | ----------- | ----------------- |
| id    | int         | unique, increment |
| name  | str(1 - 32) | unique            |

### Todo Item

Name: **todo_item**

| Field     | Data Type                | Notes                                         |
| --------- | ------------------------ | --------------------------------------------- |
| id        | int                      | unique                                        |
| created   | datetime                 | default=now()                                 |
| modified  | datetime                 | default=(same as `created`), now() on updates |
| category  | FK todo_category \| null | default=null                                  |
| todo      | str(1 - 128)             |                                               |
| completed | bool                     | default=false                                 |
