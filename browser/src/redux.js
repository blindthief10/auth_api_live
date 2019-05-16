import { createStore } from 'redux';

const initialState = {userNameValue: '', passwordValue: ''};

const authReducer = (state = initialState, action) => {

  const copyState = {...state};

  switch(action.type) {

    case 'CHANGE':
      if (action.payload.target.getAttribute('type') === 'text') {
        copyState.userNameValue = action.payload.target.value;
        console.log(copyState);
      } else if (action.payload.target.getAttribute('type') === 'password') {
        copyState.passwordValue = action.payload.target.value;
        console.log(copyState);
      }
      return copyState;

    default:
      return copyState;
  }
}

export const changeAction = payload => {
  return {
    type: 'CHANGE',
    payload: payload
  }
}


export const store = createStore(authReducer);
