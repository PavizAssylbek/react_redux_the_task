import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK } from '.././constants'


const TASKS = [
    {
        id: 1,
        text: 'Learn ReactJS',
        isCompleted: true,
    },
    {
        id: 2,
        text: 'Teas ReactJS',
        isCompleted: false,
    },
    {
        id: 3,
        text: 'Lorean ReactJS',
        isCompleted: true,
    },
];

const tasks = (state= TASKS, {id, text, isCompleted, type}) => {
    switch (type) {
        case ADD_TASK:
        return [
            ...state, {
                id,
                text,
                isCompleted
            }
        ];
        case REMOVE_TASK:
        return [...state].filter(task => task.id !== id);
        case COMPLETE_TASK:
        return [...state].map(task => {
            if(task.id === id) {
                task.isCompleted = !task.isCompleted;
            }
            return task;
        })
        default:
        return state;
    }
}
export default tasks;