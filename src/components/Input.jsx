import { useEffect, useRef, useState } from "react"

function Input({label, type, ...props}) {
  const [show, setShow] = useState(false)
  const [inputType, setInputType] = useState(type || "text")
  const inputRef = useRef()
  useEffect(()=>{
    if (show) {
        setInputType("text")
        inputRef.current.focus()
    }
    else if (type==="password"){
        setInputType("password")
        inputRef.current.focus()
    }
  }, [show])
  return (
    <label className="block relative">
        <input required type={inputType} ref={inputRef} className="bg-gray-50 p-2 pl-3 pr-7 w-[258px] h-[22px] border rounded-sm outline-none text-xs font-sans border-solid border-gray-300 focus:border-gray-400 valid:pb-0 valid:pt-4 peer" {...props} />
        <span className="absolute top-1/2 left-3 -translate-y-1/2 text-xs font-sans font-normal pointer-events-none text-gray-600 transition-all peer-valid:text-[10px] peer-valid:top-[10px]">{label}</span>
        {type === "password" && props?.value && (
          <div className="absolute top-0 right-0 h-full flex items-center">
              <button type="button" className="bg-transparent border-0 cursor-pointer" onClick={()=>setShow(!show)}>{show ? "hide" : "show"}</button>
          </div>)
        }
    </label>
  )
}

export default Input
