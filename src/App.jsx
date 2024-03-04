import { useState } from "react"
import "./App.css"

function App() {

  const [result, setResult] = useState("")

  function handleClick(e) {
    setResult(prev => prev.concat(e.target.name))
  }

  function handleClear() {
    setResult("")
  }

  function backspace() {
    setResult(result.slice(0, -1))
  }

  function resultHandle() {
    try {
      setResult(eval(result).toString())
    } catch (err) {
      setResult("Xatolik")
      setTimeout(() => {
        setResult("")
      }, 3000);
    }
  }

  return (
    <div className='App'>
      <form>
        <input type="text" disabled value={result} />
      </form>

      <div className="btns">
        <button onClick={handleClear}>C</button>
        <button onClick={backspace} className="fa-solid fa-delete-left"></button>
        <button name="/" onClick={handleClick} className="fa-solid fa-divide"></button>
        <button name="*" onClick={handleClick} className="fa-solid fa-xmark"></button>
        <button name="7" onClick={handleClick}>7</button>
        <button name="8" onClick={handleClick}>8</button>
        <button name="9" onClick={handleClick}>9</button>
        <button name="-" className="fa-solid fa-minus" onClick={handleClick}></button>
        <button name="4" onClick={handleClick}>4</button>
        <button name="5" onClick={handleClick}>5</button>
        <button name="6" onClick={handleClick}>6</button>
        <button name="+" className="fa-solid fa-plus" onClick={handleClick}></button>
        <button name="1" onClick={handleClick}>1</button>
        <button name="2" onClick={handleClick}>2</button>
        <button name="3" onClick={handleClick}>3</button>
        <button name="." onClick={handleClick}>.</button>
        <button name="0" onClick={handleClick}>0</button>
        <button onClick={resultHandle} className="result fa-solid fa-equals"></button>
      </div>
    </div >
  )
}

export default App