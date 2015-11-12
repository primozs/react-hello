import React from 'react';
import { connect } from 'react-redux';

import InputComponent from '../components/InputComponent';
import InputList from '../components/InputList';
import { addItem } from '../actions/appActions';

function mapStateToProps(state) {
  return {
    app: state.app
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addItem: (text) => dispatch(addItem(text))
  }
}

let App = React.createClass({
  displayName: 'App',

  propTypes: {
    app: React.PropTypes.object,
    addItem: React.PropTypes.func
  },

  getDefaultProps() {
    return {
      app: {
        items: []
      }
    }
  },

  render() {
    return (
      <div>
        <h3>Input - list</h3>

        <InputComponent onClick={this.props.addItem}/>
        <InputList items={this.props.app.items}/>
      </div>
    );
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
