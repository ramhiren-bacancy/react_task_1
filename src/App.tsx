
import { useState } from 'react'
import './App.css'

type Tag={
  id:string
  tag : string
}

function App() {
  const [tag,setTag] = useState<Tag[]>([])
  const [inp,setInp] = useState("")
  const [err,setErr] = useState("")

  function handleInput (e:React.ChangeEvent<HTMLInputElement>){
     setInp(e.target.value)
  }

  function handleClick (e:React.KeyboardEvent<HTMLInputElement>){
    console.log(e.key)
    if(e.key==" "){
      console.log("Hello")
    
    if(tag.length==10){
      setErr("You reach your Limit")
      return 
    }
    if(inp.trim()=="") return
      setTag((prev)=> {
        const t = prev.find((item)=> item.tag === inp)
        if(!t){
          setErr("")
          return [...prev, { id: Date.now().toString(), tag: inp.trim() }]
        }else{
            setErr("Tag already Exits")
          return prev
        }
        
      })
      setInp("")
  }
}
  function handleRemove(id:string){
    setTag(tag.filter((t) => t.id !== id))
  }

  return (
   <>
    <p className='text-2xl text-red-500'>Hello App</p>
    {err && <p className='text-red-500'> {err}</p>}
    <input type="text" value={inp} onChange={(e) => handleInput(e)} className='border rounded px-2' 
     onKeyDown={(e)=>handleClick(e)}/>
    {/* <button onClick={(e)=>handleClick(e)} className='border w-15'>Add</button> */}

    <div className='flex gap-2 '>
    {tag.map((t)=>(
      <div key={t.id} className='flex gap-2 bg-white text-black rounded-3xl px-2'>
        <p>{t.tag}</p>
        <button className='text-red-500' onClick={()=>handleRemove(t.id)}>X</button>
      </div>
    ))}
    </div>
   </>
  )
}

export default App
