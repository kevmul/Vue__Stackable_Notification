#Stackable Notifications

## Project setup

```
yarn install
yarn run serve
```

## What is this?

I wanted to create a notification system that you can stack if new notifications come in.
You can easily trigger new items to load in with

```
flash(<title>,<body>)
```

You can also pass in more variables such as Type (success|info|warning|error), display time (in milliseconds), and if it is important.

```
flash(<title>,<body>,<type>,<important>,<display_time>)
flash("Success!", "That thing you did Worked!", "success", false, 3000)
```
