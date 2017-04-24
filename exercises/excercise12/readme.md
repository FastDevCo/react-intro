# Excercise 12

Editing tasks.

We have made before course one component you might need, it is called **Editable**

**Editable** is actually just an input field that becomes editable when you click it
and saves its current state with onSave (that it takes as a parameter)
when you hit `Enter`.


## Tasks
- Copy `editable.js` to your applications `components/`-directory and import it to your `index.js` (you can put it elsewhere too its up to you)
- Use `Editable` component for making task editable.



## Tips

### Tip 1

Importing Editable from `components/`-directory:
```
import { Editable } from './components/editable';
```


### Tip 2
Usage of **Editable** component:
```
<Editable value={original_value} onSave={yourCallbackFn}/>

function yourCallbackFn (new_value) {
 // After save
}
```


### Tip 3
You can update the task with following API:
```
var appstate = new TodoData();
// Task(1e01ba13-ea47-4d24-9131-d95c23d1bb8f): "Buy milk"
appstate.updateTask("1e01ba13-ea47-4d24-9131-d95c23d1bb8f", "Buy apples");
// Task(1e01ba13-ea47-4d24-9131-d95c23d1bb8f): "Buy apples"
```
