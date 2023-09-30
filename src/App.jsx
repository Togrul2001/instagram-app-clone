import { useEffect, useRef, useState } from "react"
import {AiFillFacebook} from "react-icons/ai/index"
import Input from "./components/Input"
function App() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const enable = username && password
  let ref = useRef()
  useEffect(()=>{
    let images = ref.current.querySelectorAll("img"), count = 1, total = images.length
    setInterval(()=>{
      if (count>0) {
        images[count-1].classList.add("opacity-0")
      }
      if (count === total) {
        count = 0
      }

      images[count].classList.remove("opacity-0")
      count+=1
    }, 3000)
  },[])

  return (
    <div className="h-full w-full flex justify-center items-center gap-10 bg-white">
      <div className="w-[380px] h-[581px] relative bg-login-logo bg-[length:468.32px_634.15px] bg-[top_left_-46px]">
        <div className="w-[250px] h-[539px] absolute top-[27px] right-[18px]" ref={ref}>
          <img className="w-full h-full absolute top-0 left-0 transition-opacity ease-linear duration-700" src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1-2x.png/cfd999368de3.png" alt="" />
          <img className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity ease-linear duration-700" src="https://www.instagram.com/static/images/homepage/screenshots/screenshot2-2x.png/80b8aebdea57.png" alt="" />
          <img className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity ease-linear duration-700" src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3-2x.png/fe2540684ab2.png" alt="" />
          <img className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity ease-linear duration-700" src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4-2x.png/8e9224a71939.png" alt="" />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="p-10 pt-5 pb-5 flex flex-col justify-center items-center border border-gray-300 border-solid">
          <img className="w-[175px] h-[51px] pt-8 pb-8" src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png" alt="" />
          <div className="login-procedures">
            <form action="" className="w-full flex items-center flex-col gap-2">
              <Input label={"Phone number, username or email"} type={"text"} value={username} onChange={e=>setUsername(e.target.value)}/>
              <Input label={"Password"} type={"password"} value={password} onChange={e=>setPassword(e.target.value)}/>
              {/* <label className="block relative">
                <input type="text" required className="bg-gray-50 p-2 pl-3 w-[258px] h-[22px] border rounded-sm outline-none text-xs font-sans border-solid border-gray-300 focus:border-gray-400 valid:pb-0 valid:pt-4 peer"/>
                <span className="absolute top-1/2 left-3 -translate-y-1/2 text-xs font-sans font-normal pointer-events-none text-gray-600 transition-all peer-valid:text-[10px] peer-valid:top-[10px]">Phone number, username or email</span>
              </label>
              <label className="block relative">
                <input type="password" required name="" id="" className="bg-gray-50 p-2 pl-3 w-[258px] h-[22px] border rounded-sm outline-none border-solid border-gray-300 focus:border-gray-400 valid:pb-0 valid:pt-4 peer"/>
                <span className="absolute top-1/2 left-3 -translate-y-1/2 text-xs font-sans font-normal pointer-events-none text-gray-600 transition-all peer-valid:text-[10px] peer-valid:top-[10px]">Password</span>
              </label> */}
              <button type="submit" disabled={!enable} className="bg-blue-400 outline-none border-0 rounded-md mt-2 w-full p-2 text-white">Log in</button>
            </form>
            <div className="flex items-center justify-center mt-5 mb-5 w-full">
              <div className="bg-gray-300 border-0 border-solid h-[1px] flex-1"></div>
              <span className="ml-3 mr-3 grow-0 text-gray-500 text-xs font-semibold font-sans">OR</span>
              <div className="bg-gray-300 border-0 border-solid h-[1px] flex-1"></div>
            </div>
            <div className="flex justify-center">
              <a href="" className="flex items-center gap-2 text-blue-900 font-medium font-sans text-sm">
                <AiFillFacebook size={"22px"}/>
                Log in with Facebook
              </a>
            </div>
          </div>
          <div className="forgot-password mt-4">
            <a href="" className="text-xs font-sans text-blue-950">
              <span>Forgot password?</span>
            </a>
          </div>
        </div>
        <div className="p-5 flex gap-1 justify-center items-center border border-gray-300 border-solid">
          <span className="font-sans text-sm">Don't have an account?</span>
          <a href="" className="text-blue-500 font-medium font-sans text-sm">Sign up</a>
        </div>
        <div className="flex flex-col items-center gap-4 mt-2">
          <span className="font-sans text-sm">Get the app.</span>
          <div className="flex justify-center gap-2">
            <img src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" alt="" className="w-[134px] h-[40px]"/>
            <img src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png" alt="" className="w-[111px] h-[40px]"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
