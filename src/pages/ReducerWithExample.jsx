import { useReducer } from 'react'

const ReducerWithExample = () => {
    const [tasks, dispatch] = useReducer(taskReducer, initialTasks)

    return (
        <>
            <h2 className="card-title text-2xl mb-4">
                State Management with Reducer
            </h2>
            <div className="flex flex-row">
                <input
                    type="text"
                    placeholder="Add Task"
                    className="input input-bordered input-md w-full max-w-xs" />
                <button className="btn btn-neutral btn-wide ml-4">Add</button>
            </div>
            <div className="flex flex-col mt-4">
                {tasks.map(task => (
                    <div className="flex flex-row my-1">
                        <div className="flex flex-row bg-gray-100 rounded-md px-5 py-3 min-w-80">
                            <input type="checkbox" className="checkbox mr-3" />
                            <p className="text-md">{task.text}</p>
                        </div>
                        <button className="btn btn-accent ml-4">Edit</button>
                        <button className="btn btn-error ml-4">Delete</button>
                    </div>
                ))}
            </div>
        </>
    )
}

const taskReducer = (tasks, action) => {

}

const initialTasks = [
    { id: 0, text: 'Visit Kafka Museum', done: true },
    { id: 1, text: 'Watch a puppet show', done: false },
    { id: 2, text: 'Lennon Wall pic', done: false },
]


export default ReducerWithExample