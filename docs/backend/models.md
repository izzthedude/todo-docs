---
id: models
title: Models
description: The models of the Todo app
tags:
  - Backend
  - Models
sidebar_position: 1
---

# Models

This page lists out the models needed for the Todo app based on the levels of complexity
as mentioned in the [Features](/docs/features.md) page.

For my own sake, I'll write the models in my own almost Python-like syntax that makes
sense to me because I don't know the proper way to do this lol.

## Level 1

```yaml
TodoItem:
  id: int (unique)
  created: datetime (now() on creation)
  modified: datetime  (now() on summary or status changed)
  summary: str (len 1 - 128)
  status: bool
```

## Level 2

```yaml
TodoCategory: +
  id: int (unique)
  name: str (unique, len 1 - 32)
  colour: str (HEX format, default #9C9C9C)

TodoTag: +
  id: int (unique)
  name: str (unique, len 1 - 16)
  colour: str (HEX format, default #9C9C9C)

TodoItem:
  id: int (unique)
  created: datetime (now() on creation)
  modified: datetime  (now() on summary or status changed)
  summary: str (len 1 - 128)
  status: bool
  category: FK -> TodoCategory +
  tags: FK -> list[TodoTag] +
```

# Extra

1. **Customisable Todo Status**

```yaml
TodoStatus: +
  id: int (unique)
  name: str (unique, len 1 - 16)
  colour: str (HEX format, default #9C9C9C)
  ...

TodoItem:
  id: int (unique)
  created: datetime (now() on creation)
  modified: datetime  (now() on summary or status changed)
  summary: str (len 1 - 128)
  status: FK -> TodoStatus *
  ...
```
