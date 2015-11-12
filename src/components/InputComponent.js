import React from 'react';

let InputComponent = React.createClass({
  displayName: 'InputComponent',

  propTypes: {
    onClick: React.PropTypes.func
  },

  _onClick(e){
    if (e) {
      e.preventDefault();
    }

    this.props.onClick(this.refs.inputText.value);
  },

  render() {
    return (
      <div>
        <form onSubmit={this._onClick}>
          <input ref="inputText" type="text"/>
          <button
            onClick={this._onClick}>
            Save
          </button>
        </form>
      </div>
    );
  }
});

export default InputComponent;
