const Counter = props => {
  return (
    <div>
      <div>
        <input type="text" value={props.counter.value} placeholder="任意の数値を入力" onChange={event => props.changeValue(event)}/>
      </div>
      <div>
        <button onClick={props.increment}>加算ボタン</button>
      </div>
      <div>
        <button onClick={props.decrement}>減算ボタン</button>
      </div>
      <div>{props.counter.count}</div>
    </div>
  )
};

export default Counter;
