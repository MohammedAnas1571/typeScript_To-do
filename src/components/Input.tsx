type Input ={
    inputValue:string,
    setInputValue:React.Dispatch<React.SetStateAction<string>>
}

  export const Input = ({inputValue,setInputValue}:Input) => {
  return (
    <input type="text" value={inputValue} className='w-full p-2 rouded-sm mb-2' onChange={(event)=>setInputValue(event.target.value)}/>
  )
}

