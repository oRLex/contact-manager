import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios';

class Contact extends Component {
  state={
    showContactInfo: false,
    switchArrow: false
  }

  onShowClick = e => {
    e.preventDefault();
    this.setState({showContactInfo: !this.state.showContactInfo})
    this.setState({switchArrow: !this.state.switchArrow})
  }
  onDeleteClick = async (id, dispatch) =>{
    try{
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      dispatch({type: 'DELETE_CONTACT', payload: id})
    } catch(e){
      dispatch({type: 'DELETE_CONTACT', payload: id})
    }   
  }


  render() {
    const {id, name, email, phone} = this.props.contact;
    const { showContactInfo, switchArrow } = this.state;
    return (
      <Consumer>
        {value => {
          const {dispatch} = value
          return(
          <div className="card mb-3 p-2">
            {switchArrow ? <h4>{name} <i onClick={this.onShowClick} className="fas fa-arrow-up" style={{cursor: 'pointer'}}></i></h4> :
            <h4>{name} <i onClick={this.onShowClick} className="fas fa-arrow-down" style={{cursor: 'pointer'}}></i></h4>}
            <Link to={`contact/edit/${id}`}>
            <i className="fas fa-pencil-alt" style={{
              cursor: 'pointer',
              color: 'grey'
            }}></i>
            </Link>
            <i className="fas fa-times" style={{cursor: 'pointer', float: 'right', color: 'red'}} onClick={this.onDeleteClick.bind(this, id, dispatch)}></i>
            {showContactInfo ? <ul className="list-group">
            <li className="list-group-item">{email}</li>
            <li className="list-group-item">{phone}</li>
            </ul> : null}
          </div>
          )
        }}
      </Consumer>     
    )
  }
}

Contact.defaultProps ={
  name: 'Lel',
  email: 'me@gmail.com',
  phone: '555-555'
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
}

export default  Contact;