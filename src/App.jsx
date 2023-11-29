import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from './components/Input';
import TaskList from './components/TaskList';
import Search from './components/SearchBar';

function getTasksFromStorage() {
  const storedTasks = window.localStorage.getItem('tasks');
  const tasks = JSON.parse(storedTasks);
  return tasks ? tasks : [];
}


function App() {
  const [tasks, setTasks] = useState(getTasksFromStorage());
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [search, setSearch] = useState('');

  //funcion para crear nueva tarea cuando damos crear en 
  //componente INPUT

  const addTask = (description) => {
    const newTasks = {
      id: self.crypto.randomUUID(),
      description: description,
      isCompleted: false
    };
    setTasks([...tasks, newTasks]);
    setFilteredTasks([...filteredTasks, newTasks]);
  };

  useEffect (()=> {
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  //borrar una tarea

  const deleteTask = (id) => {
    const remainingTasks = tasks.filter(t => t.id !== id);
    setTasks([...remainingTasks]);
    setFilteredTasks([...remainingTasks]);
  };
  
  //funcion para completar una tarea

  const completeTask = (id) => {
    const modifiedTasks = tasks.map(t =>
      t.id === id ?
        { ...t, isCompleted: !t.isCompleted }
        :
        t
    );

    setTasks([...modifiedTasks]);
    setFilteredTasks([...modifiedTasks]);

  };

  //funcion para filtrar las tareas

  const searchQuery = (query) => {
    setSearch (query);
    const queryResult = tasks.filter(t => t.description.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
    setFilteredTasks(queryResult);
  };

  return (
    <main className='container'>
      <h1 className='text-center'>Lista de Tareas</h1>
      

      <Search onSearch = {query => searchQuery(query)} />

      <Input onAddTask = {(description) => addTask(description)} />
        {tasks &&
      <TaskList 
        onDeleteTask = {(id) => deleteTask(id)} tasks = {filteredTasks}
        onCompleteTask = {(id) => completeTask(id)} />
      }
      
      

    </main>
  )
}

export default App
