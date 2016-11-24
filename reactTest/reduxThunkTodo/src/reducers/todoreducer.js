let nextTodoId=0;
let count;

const todo = (state , action) => {
  switch (action.type) {

    case 'ADD_TODO':
      return {
        id: nextTodoId++,
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
      count=0;
      nextTodoId--;
      //console.log(state);
      var v= state.slice(0,action.id).concat(state.slice(action.id+1));
      console.log(state);

      console.log(v);
      return v.map(t =>
        todo(t, action)
      );

      case 'SERVER_RESPONSE':
        //console.log(action.tododata)
        nextTodoId=action.l;
        var x=action.tododata.map(function(obj,index){
          return todoget(index,obj);
        })
        console.log(x);
        return x;

      default:
        return state;
  }
};

const todoget=(index,data) =>{
  return{
    id:index,
    text:data.text,
    completed:data.completed
  }
}

export default todoreducer
