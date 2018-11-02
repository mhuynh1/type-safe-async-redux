import React from "react";
import styled from "react-emotion";

export default () => {
  return (
    <Homepage>
      <h2>Safety first!</h2>
      <p>
        This crude little app is all about being type-safe and thusly written in
        TypeScript. For now, the Yelp API returns top rated 🍕 pizza joints and their
        reviews in LA 🌴. It doesn't do much but it's all typed and uses:
      </p>
      <ul>
        <li>React </li>
        <li>Redux </li>
        <li>Redux-Saga for async tasks</li>
        <li>React-Router</li>
        <li>Redux and Router middlewares</li>
        <li>emotion.js for styled components</li>
      </ul>
      <h2>Guides and links</h2>
      <ul>
        <li>
          <a href="https://github.com/sw-yx/react-typescript-cheatsheet" target="_blank">
            react-typescript cheatsheet
          </a>
        </li>
        <li>
          <a
            href="https://github.com/piotrwitek/react-redux-typescript-guide#living-style-guide"
            target="_blank"
          >
            The complete guide to static typing in "React & Redux" apps using TypeScript
          </a>
        </li>
        <li>
          <a
            href="https://github.com/piotrwitek/typesafe-actions#behold-the-mighty-tutorial"
            target="_blank"
          >
            Tutorial for typesafe Redux "action creators"
          </a>
        </li>
        <li>
          <a
            href="https://codesandbox.io/s/github/piotrwitek/typesafe-actions-todo-app"
            target="_blank"
          >
            CodeSandbox of Todo-app implementation
          </a>
        </li>
        <li>
          <a
            href="https://flaviocopes.com/redux-saga/#when-to-use-redux-saga"
            target="_blank"
          >
            A good intro to redux saga
          </a>
        </li>
      </ul>
      <h2>TODO Features</h2>
      <ul>
        <li>add search input</li>
      </ul>
    </Homepage>
  );
};

const Homepage = styled("div")`
  padding: 3rem;
  max-width: 800px;
  text-align: left;
  display: flex;
  font-weight: bolder;
  flex-direction: column;
  height: 100vh;
  margin: auto;
`;
