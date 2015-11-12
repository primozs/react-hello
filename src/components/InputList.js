import React from 'react';

let InputList = React.createClass({
  displayName: 'InputList',

  propTypes: {
    items: React.PropTypes.array
  },

  getDefaultProps() {
    return {
      items: []
    };
  },

  render() {
    let listItems = this.props.items.map(function (item, index) {
      return (
        <tr key={index}>
          <td>{item}</td>
        </tr>
      )
    });

    return (
      <div>
        <strong>List of items</strong>
        <table>
          <tbody>
          {listItems}
          </tbody>
        </table>
      </div>
    );
  }
});

export default InputList;
