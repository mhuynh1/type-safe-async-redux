

## Safety first!
    

This crude little app is all about being type-safe and thusly written in
TypeScript. For now, the Yelp API returns top rated 🍕 pizza joints and their
reviews in LA 🌴. It doesn't do much but it's all 💪 typed and uses:

- React
- Redux
  - Redux-Saga for async tasks
- React-Router
- Redux and Router middlewares
- emotion.js for styled components

## Basic Usage

You will need:

- [Node.JS]
- A Package Manager ([Yarn](https://yarnpkg.com/en/docs/getting-started) or [npm](https://docs.npmjs.com/getting-started/installing-node))

Open the folder in your terminal and run your package manager to install dependencies and TypeScript declaration files:

```bash
# npm
npm install
npm start

# yarn
yarn install
yarn start
```

## Redux Setup

- Redux code is found in a the store directory under `/src`
  - the store contains folders organized by domain containing all of its own types/actions/reducers/sagas files
    - the types file in each store module contains all the type definitions related to it (i.e state-type, action-type, api-response object type)
  - a root index file contains the top level app state type and groups the combined reducers to export it as rootReducer
- the Redux store is setup in `/src/configureStore.tsx`
  - an exported `configureStore()` function sets up the middleware composers needed, to pass into the `createStore()` function
- finally, `/src/index.tsx` initializes the store by calling `configureStore()`

## Typing props

- connected redux components use separate type definitions for propsFromState, propsFromDispatch, router props, and any other component props. They are combined in an intersection type to be used when typing the component

## Redux-saga

- async api fetching actions are fed to redux-saga helpers to dispatch actions that will notify store that a fetch has succeeded or failed

## Guides and References

- [react-typescript cheatsheet](https://github.com/sw-yx/react-typescript-cheatsheet)
- [The complete guide to static typing in "React & Redux" apps using TypeScript](https://github.com/piotrwitek/react-redux-typescript-guideliving-style-guide)
- [step-by-step redux workflow](https://hackernoon.com/redux-step-by-step-a-simple-and-robust-workflow-for-real-life-apps-1fdf7df46092)
- [Tutorial for typesafe Redux "action creators"](https://github.com/piotrwitek/typesafe-actions#behold-the-mighty-tutorial)
- [CodeSandbox of Todo-app implementation](https://codesandbox.io/s/github/piotrwitek/typesafe-actions-todo-app)
- [A good intro to redux saga](https://flaviocopes.com/redux-saga/#when-to-use-redux-saga)

## TODO

- search input
- ...
