import { useSelector } from "react-redux";
import { TaskItem } from "./TaskItem";
export const List = ()=>{
    const {tasks} = useSelector((state)=> state)
    return (
        <div className="List">
            {
                tasks.map(i => 
                    <TaskItem
                        key={i.id}
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