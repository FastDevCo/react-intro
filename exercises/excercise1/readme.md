# Excercise 1

Rendering stuff

Our current application is little boring isn't it?

If we're going to make it to-do-app we have to list some tasks.

Make your app to render following tasks in your application:

- Do dishes
- Code application
- Start marketing campaign
- Get funding

![https://github.com/FastDevCo/react-intro/blob/master/exercises/excercise1/tasks.png](https://github.com/FastDevCo/react-intro/blob/master/exercises/excercise1/tasks.png)

## Tasks

- Create `Task`-component (from `Hello`-component) which takes `content` as property and renders it in `<li></li>`-tags.
- Use Task-components to render your list into app _(no loops or other fancy stuff yet, just copy and paste)_


## Example use of Task-component

```
<Task content="Feed your cat" />

// Renders out:
<li>Feed your cat</li>
```

## Tips

You can access props in components like this:

```
function Component (props) {
  // props.name === "Reima"
}

<Component name="Reima" />

```
