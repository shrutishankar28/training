import $ from 'jquery';
import { connect } from 'react-redux'

export function addData(caption) {
  return dispatch => {

    $.ajax({

      type: 'POST',
      url: 'http://reduxthunktodo.local.sahusoft.info/src/sync.php',
      async: true,
      dataType:'json',
      success: function(data){
        if(data!=null)
          //console.log(data);
          dispatch(addTodo(caption))
      },
      data: {cap:caption, mode : "Add" }

    })
  }
}

function toggleData(index) {
  return dispatch => {

    $.ajax({

      type: 'POST',
      url: 'http://reduxthunktodo.local.sahusoft.info/src/sync.php',
      async: true,
      dataType:'json',
      success: function(data){
        if(data!=null)
          //console.log(data);
          dispatch(toggleTodo(index))
  s    },
      data: {index :index, mode : "Edit" }

    })
  }
}

function removeData(index) {
  return dispatch => {

    $.ajax({

      type: 'POST',
      url: 'http://reduxthunktodo.local.sahusoft.info/src/sync.php',
      async: false,
      dataType:'json',
      success: function(data){
        if(data!=null)
          //console.log(data);
          dispatch(removeTodo(index));
      },
      data: {index :index, mode : "Del" }

    })
  }
}

function getData(dispatch){

  $.ajax({

    type: 'POST',
    url: 'http://reduxthunktodo.local.sahusoft.info/src/fetch.php',
    success: function(data){
      if(data!=null)
        //console.log(data);
        dispatch({type:"SERVER_RESPONSE", tododata:data})
    },
    data: JSON.stringify(),
    dataType:'json'

  })
}

function mapstate(store){
  return{
    todo:store
  }
}



function mapDispatch(dispatch){
  return{
    dispatch
  }
}

export default connect(mapstate,mapDispatch)(thunkmiddleware)
