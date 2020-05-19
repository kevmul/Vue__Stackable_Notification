# Stackable Notifications

## Project setup

```
yarn install
yarn run serve
```

## What is this?

I wanted to create a notification system that you can stack if new notifications come in.

You can easily trigger new items to load in with `flash()`

```
flash(<title>,<body>)
```

You can also pass in more variables such as Type (success|info|warning|error), display time (in milliseconds), and if it is important.

```
flash(<title>,<body>,<type>,<important>,<display_time>)
flash("Success!", "That thing you did Worked!", "success", false, 3000)
```

Please give this a download and try it out.

I will be setting up some NPM to pull in the package itself to add to any project in the future. For now, give the app a try. It is running in the default Vue page. There is a button on the page to add some dummy notifications to test out.

#### Things I want to do next

- Create NPM for deployment on other apps.
- Allow more customizations within the notifications.
- Maybe make this into a Vue Plugin.
