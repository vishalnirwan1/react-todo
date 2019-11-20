import React, { Component } from 'react';

export default class ToDoItem extends Component {
    render() {
        const { title, handleShow, handleDelete, handleEdit } = this.props;
        return (
            <li className='list-group-item text-capitalize d-flex justify-content-between my2'>
                <h6>{title}</h6>
                <div className='todo-icon'>
                    <span className='mx-2 text-success' onClick={() => { handleShow(); handleEdit() }}>
                        <i className='fas fa-pen' />
                    </span>
                    <span className='mx-2 text-danger' onClick={handleDelete} >
                        <i className='fas fa-trash' />
                    </span>
                </div>
            </li>
        )
    }
}
