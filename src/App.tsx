

import { useState } from 'react'

import ImageHeader from './components/ImageHeader'
import { Input } from './components/Input';

function App() {
  type Items ={
    title:string;
    id:string
  }
  const [items , setItems] = useState <Items[]>([])
  const [inputValue,setInputValue] = useState <string>("")
  const handleSubmit =(event:React.FormEvent)=>{
    event.preventDefault()
    setItems (prevItems =>[...prevItems, {title:inputValue,id: Date.now().toString()}]);
    setInputValue("")
  }
  const handleData =(id:string)=>{
    setItems((prev)=> prev.filter(item=> item.id!== id))

  }

  return (
   <div className='h-[100vh] flex flex-col justify-center items-center'>
    <ImageHeader/>
    <div className='w-[350px]'>
      <form className='mb-5'onSubmit={handleSubmit}>
       <Input inputValue={inputValue} setInputValue={setInputValue} />
        <button  className="bg-gray-700 w-full p-2" type="submit">Add</button>
      </form>
      <div className=' h-52 overflow-y-auto'>
        {items.map((data)=>(
        <div key={data.id} className='flex justify-between items-center border border-slate-600 p-2 mb-2 '>
          <p>{data.title}</p>
          <button onClick={()=>handleData(data.id)}>Delete</button>

        </div>
        ))}
      </div>
    </div>
   </div>
  )
}

export default App
