import React from 'react';
import InputComponent from '../components/InputComponent';
import InputList from '../components/InputList';

let App = React.createClass({
  displayName: 'App',

  getInitialState() {
    return {
      inputItems: []
    }
  },

  _onClick(val) {
    var items = this.state.inputItems;
    items.push(val);

    this.setState({
      inputItems: items
    });
  },

  render() {
    return (
      <div>
        <h3>Input - list</h3>

        <InputComponent onClick={this._onClick}/>
        <InputList items={this.state.inputItems}/>
      </div>
    );
  }
});

export default App;
