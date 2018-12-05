// Action type
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const CHANGE_VALUE = 'CHANGE_VALUE';

// Initial state
const initialState = {
  value: '',
  count: 0
};

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      if (isNaN(state.value) || state.value === '') {
        return state;
      }

      return Object.assign({}, state, {
        count: state.count + state.value
      });

    case DECREMENT:
      const result = state.count - state.value;

      if (isNaN(state.value) || result < 0) {
        return state;
      }

      return Object.assign({}, state, {
        count: result
      });

    case CHANGE_VALUE:
      const value = action.payload.event.target.value;

      // 受け取った値が数値でなければreturn
      if (isNaN(value)) {
        return state;
      }

      // 受け取った値が空ならvalueは空にする
      if (value === '') {
        return Object.assign({}, state, {
          value
        });
      }

      // 受け取った値が数値で、空でもなければ処理
      return Object.assign({}, state, {
        value: parseInt(value)
      });

    default:
      return state;
  }
}

// Action creator
export function increment() {
  return {
    type: INCREMENT
  }
}

export function decrement() {
  return {
    type: DECREMENT
  }
}

export function changeValue(event) {
  return {
    type: CHANGE_VALUE,
    payload: {
      event
    }
  }
}
