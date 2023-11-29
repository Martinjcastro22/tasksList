import Task from "./Task";

function TaskList ({tasks, onDeleteTask, onCompleteTask}) {
    return (
        <table className="table table-dark table-striped ">
        <thead className="table-dark">
          <th scope="col" className="w-25 ">Id</th>
          <th scope="col" className="w-50">Descripción</th>
          <th scope="col" className="w-25">Borrar</th>
          <th scope="col" className="w-25">Marcar</th>
        </thead>
        <tbody className="table-group-divider">
          {tasks.map(t => <Task key={t.id} task={t} onDeleteTask={onDeleteTask} onCompleteTask={onCompleteTask} />)}
        </tbody>
      </table>
    );
}

export default TaskList;