# Excercise 10

Toggling tasks.

## Tasks
- Convert **Task**-component to class-based component (same operation)
- Toggle tasks done/undone-state if toggle-button is clicked



## Tips

### Tip 1

button has at least following useful attributes:
- **onClick** callback function when clicked


```
const onButtonClick = () => {
  console.log("Button clicked!")
}

// ...

<button className="great-button" onClick={onButtonClick}>Click things</button>
```

### Tip 2
You can toggle task with following API:
```
var appstate = new TodoData();
appstate.toggleTask("1e01ba13-ea47-4d24-9131-d95c23d1bb8f");
// If it was done, now its undone and vice versa
```
