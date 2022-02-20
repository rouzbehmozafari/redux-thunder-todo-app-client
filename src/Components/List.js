import { useEffect } from "react";
import { useSelector , useDispatch} from "react-redux";
import { TaskItem } from "./TaskItem";
import { getTasksAsync } from "../redux/tasksSlice";

export const List = ()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getTasksAsync())
    },[])

    const {tasks} = useSelector((state)=> state)
    return (
        <div className="List">
            {
                tasks.map(i => 
                    <TaskItem
                        key={i._id}
                        _id= {i._id}
                        id = {i.id}
                        desc = {i.desc}
                        deadline = {i.deadline}
                        isDone = {i.isDone}
                        dateCreated = {i.dateCreated}
                        reminder = {i.reminder}
                    />
                    )
            }
        </div>
    )
}