import React, {useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Col, Container, Row} from "react-bootstrap";
import './App.css'
import {useDispatch, useSelector} from "react-redux";
import TodoList from "./components/TodoList";
import Button from "react-bootstrap/Button";
import { v4 as uuidv4 } from 'uuid';
import {addTodo} from "./redux/actions";

function App() {
  const todos = useSelector(state => state)
  const [todo, setTodo] = useState('')
  const dispatch = useDispatch()

  const add = () => {
    dispatch(addTodo({
      id: uuidv4(),
      name: todo
    }))
    setTodo('')
  }

  const handleKeypress = (e) => {
    if (e.key === 'Enter') {
      add()
    }
  }

  return (
    <Container>
      <Row className='m-5'>
        <h1>To do list</h1>
      </Row>

      <Row>
        <Col>
          <input
            type="text"
            required
            className="col form-control"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            onKeyPress={e => handleKeypress(e)}
          />
        </Col>
        <Col>
          <Button variant='success' onClick={add}>Add To Do</Button>
        </Col>
      </Row>

      <Row>
        { todos.length > 0 ? <TodoList todos={todos}/> : <Row className='m-5 text-secondary'>Nothing to do</Row> }
      </Row>
    </Container>
  );
}

export default App;
