// what will happen in each action 
export default function reducer(state, action){
    switch (action.type) {
        case 'ADD_TASK':
            const newTask = {
                id: Date.now(),
                text: action.task.text,
                completed: false,
            };
           return [...state, newTask];//store new task with old ones

        case 'TOGGLE_TASK':
           return state.map((task) =>
                    task.id === action.id ? { ...task, completed: !task.completed } : task
                )
            
        case 'DELETE_TASK':
          return  state.filter((task) => task.id !== action.id);
        default:
            return state;
    }
}