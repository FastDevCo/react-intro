# Excercise 12

Editing tasks.

We made already one component you might need it is called **Editable**

**Editable** is actually just an input field that becomes editable when you click it
and saves its current state with onSave (that it takes as a parameter)
when you hit `Enter`.


## Tasks
- Copy `editable.jsx` and import it to your `index.jsx`
- Use `Editable` component for making task editable.


Importing Editable:
```
import {Editable} from './editable';
```
Usage in JSX:
```
<Editable value={original_value} onSave={yourCallbackFn}/>

function yourCallbackFn (new_value) {
 // After save
}
```
You can update task with following API:
```
var appstate = new TodoData();
// Task(1e01ba13-ea47-4d24-9131-d95c23d1bb8f): "Buy milk"
appstate.updateTask("1e01ba13-ea47-4d24-9131-d95c23d1bb8f", "Buy apples");
```
