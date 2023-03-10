import './App.css';
import {useEffect, useState } from 'react';

function App() {

  const[bill, setBill] = useState();
  const[tip, setTip] = useState(20);
  const[numOfPpl, setNumOfPpl] = useState(1);
  const[splitTotal, setSplitTotal] = useState(0.00)

  function calSplitTotal () {
    const percentage = 1 + parseInt(tip)/100;
    const result = ( bill * percentage / numOfPpl)
      return setSplitTotal(result.toFixed(2));
  }

  function numOfPplPlus(){
    setNumOfPpl(oldValue => oldValue +1);
  }

  function numOfPplMinus(){
    setNumOfPpl(oldValue => {
      if (oldValue === 1) {
        return 1;
      } else {
        return oldValue -1 
    }
    })
  }

  function handleBillChange(e) {
    setBill(e.target.value);
  }
  
  useEffect( ()=> {
    calSplitTotal()
  }, [bill, tip, numOfPpl])

  return (
    <div>
      <label>Bill</label>
      <span>$</span>
      <input type="number" placeholder="0.00" min="0"
      value={bill} onChange={handleBillChange}
      />
      <label>Tip</label>
      <input type="number" placeholder='0' min="0"
      value={tip} onChange={ e => setTip(e.target.value)}/>
      <span>%</span>
      <div className='summary'>

        <div className='num-of-people'>
          <label>No. of People</label>
          <div className='num-of-people-control'>
           <button onClick={numOfPplMinus}>-</button>
           <span>{numOfPpl}</span>
           <button onClick={numOfPplPlus}>+</button>
          </div>
        </div>
          <div className='result'>
            <label>Split total</label>
            <span>{splitTotal}</span>
        </div>

      </div>

    </div>
  );
}

export default App;
