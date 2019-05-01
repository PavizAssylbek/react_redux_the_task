import React, { Fragment } from 'react';
import ToDo from './containers/todo/todo';
import Title from './components/title/title';
import './App.css';
import 'antd/dist/antd.css';

const App = () => (
  <Fragment>
    <Title title="The TASK" />
    <ToDo />
  </Fragment>
);

export default App;
