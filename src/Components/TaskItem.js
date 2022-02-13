import { useState } from "react"
import { useDispatch, useStore } from "react-redux"
import { removeTask,editTask } from "../redux/tasksSlice"
export const TaskItem = ({id,desc,isDone,deadline,dateCreated,reminder})=> {
    const [isEdit,setIsEdit] = useState(false)
    const [newDesc,setNewDesc] = useState('')
    const [newDeadline,setNewDeadline] = useState(deadline)
    const dispatch = useDispatch()
    const ndeadline = new Date(deadline).toISOString()
    const approveEdit = (e)=>{
        e.preventDefault()
        console.log(newDeadline)
        console.log(deadline)
        dispatch(editTask({id,newDesc,newDeadline}))
        setIsEdit(false)
    }
    return (
        <div className="TaskItem">
            {!isEdit && <>
                <p className="desc">{desc}</p>
                <p className="deadline">{ ndeadline}</p>
                <div className="edit"onClick={e=>setIsEdit(true)} >Edit</div>
                <div className="delet" onClick={()=>dispatch(removeTask(id))}>&#10060;</div>
            </>}
            {isEdit && 
            <>
                <input type="text" defaultValue={desc} onChange={e => setNewDesc(e.target.value)} />
                <input type="datetime-local" defaultValue={deadline} className='dateTime'onChange={e => setNewDeadline(e.target.value)} />
                <div className="options">
                    <div className="approve"onClick={approveEdit} >Approve</div>
                    <div className="cancel"onClick={e=>setIsEdit(false)} >Cancel</div>
                </div>
            </>}
            

        </div>
    )
}