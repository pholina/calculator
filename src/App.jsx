import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [frame, setframe] = useState("")

  const func = (number) => {

    if (number === "Del") 
    {
      var temp = ""
      for (var i = 0; i < frame.length-1; i++)
      [
         temp = temp + frame[i]
      ]
      setframe(temp)
    }
  else if (number === "Ent") 
    {
      var temp1 = "" 
      var temp2 = "" 
      if (frame.includes("x"))
      {
        var indX = frame.indexOf("x")
        for (var i = 0; i < indX; i++)
        {
          temp1 = temp1 + frame[i]
        }
        for (var i = indX+1; i < frame.length; i++)
        {
          temp2 = temp2 + frame[i]
        }
        setframe(parseFloat(temp1) * parseFloat(temp2))
      }
      else if (frame.includes("+"))
      {
        var indX = frame.indexOf("+")
        for (var i = 0; i < indX; i++)
        {
          temp1 = temp1 + frame[i]
        }
        for (var i = indX+1; i < frame.length; i++)
        {
          temp2 = temp2 + frame[i]
        }
        setframe(parseFloat(temp1) + parseFloat(temp2))
      }
      else if (frame.includes("-"))
      {
        var indX = frame.indexOf("-")
        for (var i = 0; i < indX; i++)
        {
          temp1 = temp1 + frame[i]
        }
        for (var i = indX+1; i < frame.length; i++)
        {
          temp2 = temp2 + frame[i]
        }
        setframe(parseFloat(temp1) - parseFloat(temp2))
      }
      if (frame.includes("÷"))
      {
        var indX = frame.indexOf("÷")
        for (var i = 0; i < indX; i++)
        {
          temp1 = temp1 + frame[i]
        }
        for (var i = indX+1; i < frame.length; i++)
        {
          temp2 = temp2 + frame[i]
        }
        setframe(parseFloat(temp1) / parseFloat(temp2))
      }
    }
    else if (number === "On")
    {
      setframe("")
    }
    else if (number === "Off")
    {
      setframe("")
    }

    else 
    {
      setframe (frame+number)
    }

  }

  return (
    <div className = "w-full flex justify-center items-center bg-stone-100 max-sm:scale-50">
      <div className='text-3xl w-1/2 rounded-xl bg-stone-300 min-h-screen flex-col pr-6 pl-6 max-sm:w-full'>
        <div className = "bg-stone-400 w-full h-32 flex mt-24 rounded-xl text-white flex justify-end items-end text-7xl">
          {frame}
        </div>

        <div className = "w-full bg-stone-300 h-28 mt-20 flex justify-end max-sm:text-xs">
          <div className = "w-1/4 bg-stone-400 h-28  ml-4 mr-4 rounded-xl text-6xl max-sm:text-4xl max-sm:w-1/2 flex justify-center items-center text-white active:bg-zinc-400" onClick = { () => func("Del")}>
            Del
          </div>
          <div className = "w-1/4 bg-stone-400 h-28 ml-4 mr-4 rounded-xl text-6xl max-sm:text-4xl max-sm:w-1/2 flex justify-center items-center text-white" onClick = { () => func("On")}>
            On
          </div>
          <div className = "w-1/4 bg-stone-400 h-28 ml-4 mr-4 rounded-xl text-6xl max-sm:text-4xl max-sm:w-1/2 flex justify-center items-center text-white"onClick = { () => func("Off")}>
            Off
          </div>
        </div>

        <div className = "w-full bg-stone-300 h-28 mt-20 flex justify-end">
          <div className = "w-1/4 bg-stone-400 h-28  ml-4 mr-4 rounded-xl text-6xl max-sm:text-4xl max-sm:w-1/2 flex justify-center items-center text-white active:bg-zinc-400" onClick = { () => func("7")}>
            7
          </div>
          <div className = "w-1/4 bg-stone-400 h-28  ml-4 mr-4 rounded-xl text-6xl max-sm:text-4xl max-sm:w-1/2 flex justify-center items-center text-white active:bg-zinc-400" onClick = { () => func("8")}>
            8
          </div>
          <div className = "w-1/4 bg-stone-400 h-28  ml-4 mr-4 rounded-xl text-6xl max-sm:text-4xl max-sm:w-1/2 flex justify-center items-center text-white active:bg-zinc-400" onClick = { () => func("9")}>
            9
          </div>
          <div className = "w-1/4 bg-stone-400 h-28  ml-4 mr-4 rounded-xl text-6xl max-sm:text-4xl max-sm:w-1/2 flex justify-center items-center text-white active:bg-zinc-400" onClick = { () => func("x")}>
            x
          </div>  
        </div>

        <div className = "w-full bg-stone-300 h-28 mt-20 flex justify-end">
        <div className = "w-1/4 bg-stone-400 h-28  ml-4 mr-4 rounded-xl text-6xl max-sm:text-4xl max-sm:w-1/2 flex justify-center items-center text-white active:bg-zinc-400" onClick = { () => func("4")}>
            4
          </div>
          <div className = "w-1/4 bg-stone-400 h-28  ml-4 mr-4 rounded-xl text-6xl max-sm:text-4xl max-sm:w-1/2 flex justify-center items-center text-white active:bg-zinc-400" onClick = { () => func("5")}>
            5
          </div>
          <div className = "w-1/4 bg-stone-400 h-28  ml-4 mr-4 rounded-xl text-6xl max-sm:text-4xl max-sm:w-1/2 flex justify-center items-center text-white active:bg-zinc-400" onClick = { () => func("6")}>
            6
          </div>
          <div className = "w-1/4 bg-stone-400 h-28  ml-4 mr-4 rounded-xl text-6xl max-sm:text-4xl max-sm:w-1/2 flex justify-center items-center text-white active:bg-zinc-400" onClick = { () => func("+")}>
            +
          </div>
        </div>

        <div className = "w-full bg-stone-300 h-28 mt-20 flex justify-end">
        <div className = "w-1/4 bg-stone-400 h-28  ml-4 mr-4 rounded-xl text-6xl max-sm:text-4xl max-sm:w-1/2 flex justify-center items-center text-white active:bg-zinc-400" onClick = { () => func("1")}>
            1
          </div>
          <div className = "w-1/4 bg-stone-400 h-28  ml-4 mr-4 rounded-xl text-6xl max-sm:text-4xl max-sm:w-1/2 flex justify-center items-center text-white active:bg-zinc-400" onClick = { () => func("2")}>
            2
          </div>
          <div className = "w-1/4 bg-stone-400 h-28  ml-4 mr-4 rounded-xl text-6xl max-sm:text-4xl max-sm:w-1/2 flex justify-center items-center text-white active:bg-zinc-400" onClick = { () => func("3")}>
            3
          </div>
          <div className = "w-1/4 bg-stone-400 h-28  ml-4 mr-4 rounded-xl text-6xl max-sm:text-4xl max-sm:w-1/2 flex justify-center items-center text-white active:bg-zinc-400" onClick = { () => func("-")}>
            -
          </div>
        </div>

        <div className = "w-full bg-stone-300 h-28 mt-20 flex justify-end">
          <div className = "w-1/4 bg-stone-400 h-28  ml-4 mr-4 rounded-xl text-6xl max-sm:text-4xl max-sm:w-1/2 flex justify-center items-center text-white active:bg-zinc-400" onClick = { () => func("Ent")}>
            Enter
          </div>
          <div className = "w-1/4 bg-stone-400 h-28  ml-4 mr-4 rounded-xl text-6xl max-sm:text-4xl max-sm:w-1/2 flex justify-center items-center text-white active:bg-zinc-400" onClick = { () => func("0")}>
            0
          </div>
          <div className = "w-1/4 bg-stone-400 h-28  ml-4 mr-4 rounded-xl text-6xl max-sm:text-4xl max-sm:w-1/2 flex justify-center items-center text-white active:bg-zinc-400" onClick = { () => func(".")}>
            .
          </div>
          <div className = "w-1/4 bg-stone-400 h-28  ml-4 mr-4 rounded-xl text-6xl max-sm:text-4xl max-sm:w-1/2 flex justify-center items-center text-white active:bg-zinc-400" onClick = { () => func("÷")}>
          ÷
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default App


