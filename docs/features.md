---
id: features
title: Features
description: The features of the Todo app
tags:
  - Features
sidebar_position: 2
---

# Features

Features are separated by Levels. Starting from Level 1, each incremental Level will
add new features with increasing complexity.

## Level 1

A User can use the app to create a personal Todo List that persists between sessions.

1. **Todo Item Operations**  
   The User must be able to create, view, edit, and delete a Todo Item.

2. **View Todo List**  
   The User must be able to view a Todo List containing all their Todo Items.

3. **Search Item**  
   The User must be able to search for an Item based on some input. The List will then
   only display Items matching the input. If no input is given, then all available Items
   are displayed.

4. **Data Persistence**  
   The User must be able to leave and resume a session without losing any data.

## Level 2

On top of the Level 1 features, a User can create multiple Todo Lists based on
Categories and Tags.

1. **Todo Category Operations**  
   The User must be able to create, view, edit, and delete a Todo Category. A Todo List
   must be associated with one Category. When a new List is created, or when a Category
   containing existing Lists is deleted, the List(s) will be automatically associated
   with a default "No Category" Category, which cannot be deleted.

2. **Filter Lists by Categories**  
   The User must be able to filter their Lists by their selected Category or Categories.

3. **Todo Tag Operations**  
   The User must be able to create, view, edit, and delete a Todo Tag. A Todo Item can
   be associated with multiple Tags, and a Tag can be associated with multiple Items.

4. **Filter Items by Tags**  
   The User must be able to filter their Items by their selected Tag or Tags.

## Extra

Extra features are features that are not limited to any levels of complexities.
