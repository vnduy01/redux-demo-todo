const initialState = []

const todos = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
      case 'ADD_TODO':
          console.log(state)
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      case 'TOGGLE_TODO':
        return state.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
      default:
        return state
    }
  }
  
  export default todos