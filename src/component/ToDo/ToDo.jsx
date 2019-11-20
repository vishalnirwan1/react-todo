import React, { Component } from "react";
import { Grid, Paper, Button } from '@material-ui/core';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import './toDo.css';
import { ToDoInput } from "../ToDoInput";
import { ToDoList } from '../ToDoList';

class ToDo extends Component {

    constructor(props, context) {
        super(props, context);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearList = this.clearList.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);

        this.state = {
            show: false,
            items: [],
            id: uuid(),
            item: '',
            editItem: false
        };
    }

    handleClose() {
        this.setState({ show: false })
    }
    handleShow() {
        this.setState({ show: true })
    }
    handleChange(e) {
        this.setState({
            item: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        const newItem = {
            id: this.state.id,
            title: this.state.item,

        }
        const updatedItems = [...this.state.items, newItem];

        this.setState({
            items: updatedItems,
            item: '',
            id: uuid(),
            editItem: false
        });
    }
    clearList() {
        this.setState({
            items: []
        })
    }
    handleDelete(id) {
        const filteredItems = this.state.items.filter(item => item.id !== id);
        this.setState({
            items: filteredItems
        });
    }
    handleEdit(id) {
        const filteredItems = this.state.items.filter(item => item.id !== id);
        const selectedItems = this.state.items.find(item => item.id === id);

        this.setState({
            items: filteredItems,
            item: selectedItems.title,
            editItem: true,
            id: id
        });
    }

    render() {
        return (
            <div className='container'>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        {/* <Paper className='header'></Paper> */}
                        <img className="logo-icon" src="https://lh3.googleusercontent.com/9_zJhLq3U7TTPdagXZzauMIbyTiBsdCI1Gl1mes2WuE1ZNPnsHyWnNGfqDIsGD9FWZQl=s180-rw" width="130" height="130" alt="TodoMVC"></img>
                    </Grid>
                    <Grid item xs={8}>
                        <Paper className='header'><b>TODO APP</b></Paper>
                    </Grid>
                    <Grid className='middleSection' item xs={4}>
                        <Button variant="contained" color="primary" onClick={this.handleShow}>
                            Todo
                        </Button>
                    </Grid>
                    <Grid item xs={8}>
                        <ToDoList
                            handleShow={this.handleShow}
                            items={this.state.items}
                            clearList={this.clearList}
                            handleDelete={this.handleDelete}
                            handleEdit={this.handleEdit}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className='footer'>Footer</Paper>
                    </Grid>
                </Grid>
                <ToDoInput
                    show={this.state.show}
                    onHide={this.handleClose}
                    item={this.state.item}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    editItem={this.state.editItem}
                />
            </div>
        )
    }
}

export default ToDo;