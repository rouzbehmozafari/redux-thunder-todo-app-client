import { useDispatch } from "react-redux"
import { removeTask } from "../redux/tasksSlice"
export const TaskItem = ({id,desc,isDone,deadline,dateCreated,reminder})=> {
    const dispatch = useDispatch()
    const ndeadline = new Date(deadline).toISOString()
    return (
        <div className="TaskItem">
            <p className="desc">{desc}</p>
            <p className="deadline">{ ndeadline}</p>
            <div className="edit">Edit</div>
            <div className="delet" onClick={()=>dispatch(removeTask(id))}>&#10060;</div>
        </div>
    )
}