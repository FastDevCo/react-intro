# Excercise 10

Toggling tasks.

## Tasks
- Toggle tasks done/undone-state if toggle-button is clicked


You can toggle task with following API:
```
var appstate = new TodoData();
appstate.toggleTask("1e01ba13-ea47-4d24-9131-d95c23d1bb8f");
// If it was done, now its undone and vice versa
```


## Tips

### Tip 1

button has at least following useful attributes:
- **onClick** callback function when clicked
