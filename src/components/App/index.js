// == Import npm
import React, { PureComponent } from 'react';

// == Import
import tasksTab from '../../data/tasks';
import Form from '../Form';
import Counter from '../Counter';
import List from '../List';

import './style.scss';

// == Composant
class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tasks: tasksTab,
      counter: 0,
      value: '',
    };
  }

  componentDidMount() {
    this.updateCounter();
  }

  componentDidUpdate() {
    this.updateCounter();
  }

  handlerTaskChecked = (e) => {
    const { tasks } = this.state;
    this.setState({
      tasks: tasks.map((elem) => (
        elem.id === e.id ? { ...elem, done: !elem.done } : elem
      )),
    });
  }

  submitForm = (e) => {
    e.preventDefault();
    const { tasks, value } = this.state;

    this.setState({
      // eslint-disable-next-line max-len
      tasks: [...tasks, { id: tasks.length + 1, label: value, done: false }],
      value: '',
    });
  }

  changeForm = (event) => {
    this.setState({
      value: event.target.value,
    });
  }

  updateCounter = () => {
    const { tasks } = this.state;
    const result = tasks.filter((elem) => (!elem.done)).length;
    this.setState({
      counter: result,
    });
  }

  render() {
    const { tasks, counter, value } = this.state;

    return (
      <div className="app">
        <Form
          onSubmitHandler={this.submitForm}
          onChangeHandler={this.changeForm}
          inputValue={value}
        />
        <Counter nbrTask={counter} />
        <List
          tasks={tasks.sort((a, b) => a.done - b.done)}
          onTaskChecked={this.handlerTaskChecked}
        />
      </div>
    );
  }
}

// == Export
export default App;
