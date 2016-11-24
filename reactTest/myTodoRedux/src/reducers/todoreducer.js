let count=0;

const todo = (state , action) => {
  switch (action.type) {

    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };

      case 'REMOVE_TODO':

        if(state.id > action.id){
          count++;
          if(count==1){
          return {
            ...state,
            id: action.id,
            completed: state.completed
          };
        }
        else{
          return {
            ...state,
            id: action.id+count-1,
            completed: state.completed
          };
        }
        }
        return state;

      case 'TOGGLE_TODO':
        if (state.id !== action.id) {
          return state;
        }

        return {
          ...state,
          completed: !state.completed
        };


     default:
      return state;
  }
};


//reducer

const todoreducer = (state = [], action) => {
  switch (action.type) {

    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];

    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      );

    case 'REMOVE_TODO':
      console.log(state);
      var v= state.slice(0,action.id).concat(state.slice(action.id+1))
      console.log(v);
      return v.map(t =>
        todo(t, action)
      );

    default:
      return state;
  }
};


/*const todoreducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
        id: action.id,
        text: action.text,
        completed: false
      }
    ]

    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      }

    default:
      return state
  }
}
*/

/*
const todo = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })

      case 'REMOVE_TODO':
        //console.log(action.id)
          return {
            id: action.id

          }

    default:
      return state
  }
}

const todoreducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )

      case 'REMOVE_TODO':

      console.log(action.id)
      if (state.id!== action.id) {
        return state;
      }

      return {
        ...state,
        todoreducer: [...state.slice(0, action.id), ...state.slice(action.id+1)]
      }
          default:
      return state
  }
}
*/



/*const todoreducer = combineReducers({
  todos
});*/


export default todoreducer
