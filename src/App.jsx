import { useState } from 'react'
import './App.css'
import Card from '../src/Components/Cards/Card.jsx';
import './Button.css';

function App() {
  const [v,setv] = useState(0);
  const [arr,setarr] = useState([0,0,0,0,0,0,0,0,0])
  return (
    <>
      <div style={{color : 'white',fontSize : '30px' , marginBottom : '5px'}}>Current Turn : {(v%2==0) ? 'O' : 'X'}</div>

      <div style={{display : 'flex' , flexWrap : 'wrap', justifyContent : 'center' , marginBottom : '10px'}}>
      <Card i={v} idx={0} check={arr} value={setv} clicked={false} />
      <Card i={v} idx={1} check={arr} value={setv} />
      <Card i={v} idx={2} check={arr} value={setv} />
      <Card i={v} idx={3} check={arr} value={setv} />
      <Card i={v} idx={4} check={arr} value={setv} />
      <Card i={v} idx={5} check={arr} value={setv} />
      <Card i={v} idx={6} check={arr} value={setv} />
      <Card i={v} idx={7} check={arr} value={setv} />
      <Card i={v} idx={8} check={arr} value={setv} />
      </div>

      <div>
        <button className='btn' style={{height:'38px',width : '140px' , fontSize : '17px' , borderRadius : '30px' , backgroundColor : 'blue' , color : 'white' , fontWeight : 'bold' , border : 'none' , paddingTop : '3px'}} onClick={() => {
          window.location.reload()
        }}>Click To Reset</button>
      </div>
    </>
  )
}

export default App;
