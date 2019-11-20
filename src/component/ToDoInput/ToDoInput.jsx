import React, { Component } from "react";
import { Modal } from 'react-bootstrap';
import { Button } from '@material-ui/core';


class ToDoInput extends Component {
    render() {
        const { show, onHide, item, handleChange, handleSubmit, editItem } = this.props;
        return (
            <div>
                <Modal show={show} onHide={onHide}>
                    <form onSubmit={handleSubmit}>
                        <Modal.Header closeButton>
                            <Modal.Title>To Do Input</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className='input-group-text bg-primary'>
                                <input type='text'
                                    className='form-control'
                                    placeholder='Add a Task'
                                    value={item}
                                    onChange={handleChange}
                                />
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={onHide}>
                                Close
                        </Button>
                            <button type='submit' variant="primary" className={
                                editItem? 'btn btn-success'
                                : 'btn btn-primary'
                            } >
                                {editItem ? 'Edit Item' : 'Add Item'}
                        </button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </div>
        )
    }
}

export default ToDoInput;