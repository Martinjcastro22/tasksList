import { IoTrashBin } from "react-icons/io5";
import { IoIosCloseCircle} from "react-icons/io";

function Task ({task, onDeleteTask, onCompleteTask}) {
    return (
        <tr
      className={task.isCompleted ? "completed" : null}
    >
      <td>
        {task.id.slice(-5)}
      </td>
      <td>
        {task.description}
      </td>
      <td>
        <IoTrashBin size={20} color={'red'} className="icons" onClick={() => onDeleteTask(task.id)} />
      </td>
      <td>
        <IoIosCloseCircle className="icons task" size={20} color="blue" onClick={() => onCompleteTask(task.id)} />
      </td>
    </tr>
  );
}

export default Task;
   