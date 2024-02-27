

const ImageHeader = () => {
  return (
    <div  className="flex items-center mb-8">
      <img className="w-28 h-28 object-contain"
      src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/230px-React-icon.svg.png" alt="React Logo" />
      <span className="mx-4">+</span>
       <img className="w-28 h-28 object-contain"
       src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" alt="TypeScript Logo" /> 
       
    </div>
  )
}

export default ImageHeader