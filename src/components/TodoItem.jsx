import React from 'react'
import {Col, Row} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import {useDispatch} from "react-redux";
import {deleteTodo, editTodo} from "../redux/actions";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch()

  const deleteToDo = () => {
    dispatch(deleteTodo(todo.id))
  }

  const editToDo = () => {
    dispatch(editTodo(todo.name))
  }

  return (
    <Row className='m-3'>
      <Col xs={6}>
        { todo.name }
      </Col>

      <Col xs={1}>
        <Button onClick={editToDo}>Edit</Button>
      </Col>

      <Col xs={1}>
        <Button onClick={deleteToDo} variant='danger'>Delete</Button>
      </Col>
    </Row>
  )
}

export default TodoItem