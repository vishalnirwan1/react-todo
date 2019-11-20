import React, { Component } from 'react';
import { ToDoItem } from '../ToDoItem';

export default class ToDoList extends Component {
    render() {
        const { items, clearList, handleShow, handleDelete, handleEdit } = this.props;
        return (
            <ul className='list-group my-5'>
                <h3 className='text-capitalize text-center'> todo list</h3>
                {
                    items.map(data => {
                        return <ToDoItem
                            key={data.id}
                            title={data.title}
                            handleShow={handleShow}
                            handleDelete={() => handleDelete(data.id)}
                            handleEdit={() => handleEdit(data.id)}
                        />;

                    })
                }
                <button className='text-capitalize btn btn-danger' onClick={clearList} >clear list</button>
            </ul>
        )
    }
}
