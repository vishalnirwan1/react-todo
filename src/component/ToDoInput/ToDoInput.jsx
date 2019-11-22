import React, { Component } from "react";
import { Modal } from 'react-bootstrap';


class ToDoInput extends Component {
    render() {
        const { show, onHide, item, handleChange, handleSubmit, editItem, error } = this.props;
        const submitt = function (e) {
            e.preventDefault();
            handleSubmit();
            onHide();
        }
        return (
            <div>
                <Modal show={show} onHide={() => onHide(editItem)}>
                    <form onSubmit={submitt}>
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
                            <button type='submit' disabled={error} variant="primary" className={
                                editItem ? 'btn btn-success'
                                    : 'btn btn-primary'
                            } >
                                {editItem ? 'Edit Task' : 'Add Task'}
                            </button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </div>
        )
    }
}

export default ToDoInput;