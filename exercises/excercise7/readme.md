# Excercise 7

Controls

Our application is now showing us tasks but we don't have any controls for data.
Lets create Input-field for new task and buttons for removing and for toggling task's status.

This is the last excercise of first section.


## Tasks
- Add task actions (remove task- and toggle task status-buttons) into `Task` like in example app.
- Create new component `AddTaskInput` for task input field. Add it into its place like in example app.



#### Task actions as html:
```
<div class="task-actions">
    <button class="task-btn remove-btn">
      <i class="fa fa-times-circle-o"></i>
    </button>
    <button class="task-btn">
      <!-- Either done or undone -->
      <i class="done fa fa-check-circle-o"></i>
      <i class="undone fa fa-check-circle-o"></i>
    </button>
</div>
```


#### Task input as html:

```

<div class="add-task-container">
  <input
    type="text"
    value=""
    placeholder="Add task..." />
</div>

```
