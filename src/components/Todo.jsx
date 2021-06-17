import {  useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

//styles
import "../styles/Todo.css";
const Todo = () => {
 
    const params = useParams();
     const { handleSubmit } = useForm();
  
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");
    const [todoEditing, setTodoEditing] = useState(null);
    const [editingText, setEditingText] = useState("");
  
    
    const newTodo = {
     
      userId: '60c8a9ae4694fd0008c1c76e', //required
      completed: false, //required
      title: 'First Todo', //required
      description: 'This is a description of a todo that is created by Frank Choongsaeng', //optional
      order: 1 // optional
    };
    
    fetch(`https://user-manager-three.vercel.app/api/todo/create`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newTodo)
    })
      .then(res => res.json())
      .then(result => {
        console.log(result)
      })
      .catch(err => {
        console.log('this error occurred', err)
      });
   
  
    setTodos([...todos].concat(newTodo));
    setTodo("");

    // UPDATE A CREATED TODO.
// you must provide a id and the id must be the id of an actual created todo.
// in this example, we use the id of the todo we created above.
// get a user's todo to see a list of todos a user has and the todo ids.
// to update a todo, you must provide some data that you want to change.
// this data can include title, description, order or completed

function toggleComplete(id) {
  let updatedTodos = {
    id: id, //required
    completed: true, // change the status to completed
    description: 'A new description. the last one was too long', // change the description as well
  }
  
  fetch(`https://user-manager-three.vercel.app/api/todo/update`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(updatedTodos)
  })
    .then(res => res.json())
    .then(result => {
      console.log(result)
    })
    .catch(err => {
      console.log('this error occurred', err)
    })
  setTodos(updatedTodos);
}

  
// DELETE A CREATED TODO.
// you must provide a todoId and the todoId must be the id of an actual created todo
// in this example, we use the id of the todo we created above.
// get a user's todo to see a list of todos a user has and the todo ids.
  
  
   function deleteTodo(id) {
     
     let updatedTodos = {
        id: id, //required
        completed: true, // change the status to completed
        description: 'A new description. the last one was too long', // change the description as well
      }
          
            fetch(`https://user-manager-three.vercel.app/api/todo/delete?todoId=${params.todoid}`)
            .then(res => res.json())
            .then(result => {
            console.log(result)
            })
            .catch(err => {
           console.log('this error occurred', err)
            })

      setTodos(updatedTodos);
    }
  
      // GET A USERS TODO.
// this will return an array of all the todo's a user has created or an empty array if user has no todos
// you must provide a userId and the userId must be the id of an actual registered user
// in this example, we use the id of the user we registered above.
// register or log in a user to get the users' id
//     function getTodo(userId) {
     
//       let updatedTodos = {
//          userId: userId, //required
//          completed: true, // change the status to completed
//          description: 'A new description. the last one was too long', // change the description as well
//        }
           
//              fetch(`https://user-manager-three.vercel.app/api/todo?userId=${params.userid}`)
//              .then(res => res.json())
//              .then(result => {
//              console.log(result)
//              })
//              .catch(err => {
//             console.log('this error occurred', err)
//              })
 
//        setTodos(updatedTodos);
//      }
   
  
  
    function submitEdits(id) {
      const updatedTodos = [...todos].map((todo) => {
        if (todo.id === id) {
          todo.text = editingText;
        }
        return todo;
      });
      setTodos(updatedTodos);
      setTodoEditing(null);
    }
  
    return (
      <div id="todo-list">
        <h1>Todo List</h1>
        <form onSubmit={handleSubmit(newTodo)}>
          <input
            type="text"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          <button type="submit">Add Todo</button>
        </form>
        {todos.map((todo) => (
          <div key={todo.id} className="todo">
            <div className="todo-text">
              <input
                type="checkbox"
                id="completed"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
              />
              {todo.id === todoEditing ? (
                <input
                  type="text"
                  onChange={(e) => setEditingText(e.target.value)}
                />
              ) : (
                <div>{todo.text}</div>
              )}
            </div>
            <div className="todo-actions">
              {todo.id === todoEditing ? (
                <button onClick={() => submitEdits(todo.id)}>Submit Edits</button>
              ) : (
                <button onClick={() => setTodoEditing(todo.id)}>Edit</button>
              )}
  
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    );
  };
  export default Todo;
