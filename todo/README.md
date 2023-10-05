# TODO application

Stage: Idea
Topic: app

## Idea

To create a simple todo app which has the following features,

- Create Task
- Delete a task
- Mark as done


### FE

- TypeScript
- React
- TailwindCSS

### **IDE**

- vscode
    - prettier
    - eslint
- npm

### **Github**

[https://github.com/bruno-carneiro-da-silva/onbeef-case](https://github.com/bruno-carneiro-da-silva/onbeef-case)

clone the above repo

## Node version on project

- v16.13.0

```bash
cd todo
npm i
npm start
```

## Development

### Installation

[Create a New React App - React](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app)

```jsx
npx create-react-app todo --template typescript
```

### Tailwind

[https://tailwindcss.com/docs/guides/create-react-app](https://tailwindcss.com/docs/guides/create-react-app)

```jsx
npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```

```jsx
npm install @craco/craco
```

```jsx
// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}
```

```jsx
// package.json
 "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "eject": "craco eject"
  },
```

```jsx
npx tailwindcss-cli@latest init

// tailwind.config.js will be created
```

./src/index.css

```jsx
@tailwind base;
@tailwind components;
@tailwind utilities;
```

![Untitled](TODO%20application%203987602523774d06877078f0a10b59fa/Untitled.png)

Optional

Prettier Extension needs to be installed

```jsx
yarn add prettier eslint-config-prettier eslint-plugin-prettier --dev
```

vscode comes with prettier

```jsx
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
}
```

[How to use Prettier with ESLint and TypeScript in VSCode | Khalil Stemmler](https://khalilstemmler.com/blogs/tooling/prettier/)

Optional

```jsx
npm i eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --dev
```

If using create-react-app to bootstrap a project, eslint is already included as a dependency through react-scripts, and therefore it is not necessary to explicitly install it with npm.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
