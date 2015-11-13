import 'grommet/grommet.min.css'

import React from 'react';
import { connect } from 'react-redux';

import App from 'grommet/components/App'
import Header from 'grommet/components/Header'
import Title from 'grommet/components/Title'
import Footer from 'grommet/components/Footer'

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

let MainApp = React.createClass({
  displayName: 'MainApp',

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
      <App centered={true}>
        <Header
          direction="row"
          justify="between"
          large={true}
          pad={{horizontal: 'medium'}}>
          <Title>Todo App</Title>
        </Header>

        <InputComponent onClick={this.props.addItem}/>
        <InputList items={this.props.app.items}/>
      </App>
    );
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainApp);
