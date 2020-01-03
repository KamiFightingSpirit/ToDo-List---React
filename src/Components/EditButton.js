/* 
Description: Adds the edit icon and calls the line-item edit function on click
*/

import React, { Component } from 'react';
import './EditButton.css';


class EditButton extends Component {

  handleEditClick = () => {
    this.props.handleEditClick(this.props.id)
  }
  render() {
    return(
    <span onClick={this.handleEditClick}>
      <i class="fas fa-edit"></i>
    </span>
    )
  }
}



export default EditButton;