import React from 'react';
import { connect } from 'react-redux'
import { increment, changeValue, decrement } from '../../redux/modules/counter'
import Counter from '../../assets/react-redux/components/Counter'

export default connect(
  state => {
    return {
      counter: state.counter
    }
  },
  dispatch => {
    return {
      increment: () => {
        dispatch(increment())
      },
      decrement: () => {
        dispatch(decrement())
      },
      changeValue: (event) => {
        dispatch(changeValue(event))
      }
    }
  }
)(Counter);
