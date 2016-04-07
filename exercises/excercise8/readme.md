# Excercise 8

Reactive apps
Our application has not yet any interactions, lets change that.

First you have to do some cleanup and add new things into your app.

We have already created TodoData-model to persist your tasks into localstorage. You don't have to care about it because we're just using it through API.

## Tasks
- Copy `models/`-directory to your app.
- Import `TodoData` in your `index.jsx`
- Remove old `original_tasks`


```
// in index.jsx head
// Importing TodoData-model to your app
import {TodoData} from './model/todomodel';

// init our datastore
var appstate = new TodoData();

// replace old hardcoded tasks temporarily with this if you want your app still working as before
var original_tasks = appstate.getTasks();

```

## Tip

You can start from clean slate by just copying `model`-directory and `solution/index.jsx` to your base.
