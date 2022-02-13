export const Add = ()=>{
    return (
        <div className="Add">
        <form action="">
        <label htmlFor="">Task</label>
        <input type="text" placeHolder='Add Task' />
        <label htmlFor="">Day & Time</label>
        <input type="datetime-local" className='dateTime'/>
        <div className="reminder">
            <label htmlFor="" className='setReminder' >Set Reminder</label>
            <input type="checkbox" className='check'/>
        </div>
        <input type="submit" value='Save Task' />
        </form>
        </div>
    )
}
