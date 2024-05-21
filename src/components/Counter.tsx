import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../redux/store.ts'
import { decrementAsync, incrementAsync, resetAsync } from '../redux/counterSlice.ts'

import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import { TbHttpDelete } from "react-icons/tb";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.count)
  const dispatch = useAppDispatch()

  return (
    <div>
      <button onClick={() => dispatch(incrementAsync())}><FaCirclePlus className="icon increment" /></button>
      <h1>{count}</h1>
      <button onClick={() => dispatch(decrementAsync())}><FaCircleMinus className="icon decrement" /></button>
      <button onClick={() => dispatch(resetAsync())}><TbHttpDelete  className="icon reset" /></button>
    </div>
  )
}

  export default Counter