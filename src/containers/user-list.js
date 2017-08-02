import React, { Component } from 'react';


class UserList extends Component {
  renderList() {

      return (
        <li>name</li>
      );

  }

  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    );
  }
}



export default UserList;
