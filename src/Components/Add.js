import { useState ,useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { addNewTask,addTasksAsync } from "../redux/tasksSlice"
export const Add = ()=>{
    const tasks = useSelector((state)=>state.tasks)
    const dispatch = useDispatch()
    const [desc,setDesc] = useState('')
    const [dt,setDt] = useState('')
    const [isReminder,setIsReminder] = useState(false)
    const [remDate,setIsRemDate] = useState(false)
    const [isEmpty,setIsEmpty] = useState(false)
    const [fillForm,setFillForm] = useState(false)



    useEffect(()=>{
        if (!dt){
            setIsEmpty(true)
        } else {setIsEmpty(false)}
    },[dt])

    const saveTask = (e)=>{
        e.preventDefault();
        isEmpty ? setFillForm(true) : setFillForm(false)
        // console.log(new Date(dt).toISOString().slice(0, -1))
        // console.log(new Date(dt).toLocaleString())
        if (!isEmpty){
            const newTask = {
                id : Object.keys(tasks).length ,
                desc: desc,
                isDone: false,
                deadline : dt,
                dateCreated: Date.now(),
                reminder : remDate,
            }
            dispatch(addTasksAsync(newTask))
            // console.log(newTask)
            // dispatch(addNewTask(newTask))
        }
    }
    return (
        <div className="Add">
            <form action="">
                <label htmlFor="">Task</label>
                <input type="text" placeholder='Add Task' onChange={e=> setDesc(e.target.value)} />
                <label htmlFor="">Day & Time</label>
                <input type="datetime-local" className='dateTime' onChange={e=> setDt(e.target.value)}/>
                <div className="reminder">
                    <label htmlFor="" className='setReminder'  >Set Reminder</label>
                    <input type="checkbox" className='check'onChange={e=> setIsReminder(e.target.checked)}/>
                    {isReminder && 
                    <input type="datetime-local" className='dateTime' onChange={e=> setIsRemDate(e.target.value)}/>
                    }
                </div>
                <input type="submit" value='Save Task' onClick={saveTask} />
            {fillForm && <h4 className="fillPls">Please fill in the form</h4>}
            </form>
        </div>
    )
}
