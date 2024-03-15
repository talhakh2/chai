import { useCallback, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [length, setLenght] = useState(8);
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");

  const paswordGenerator = useCallback(() => {

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (num) str += "0123456789"
    if (char) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setPassword(pass)

  }, [
    length,
    num,
    char,
    setPassword,
  ]);

  useEffect(() => {
    paswordGenerator()
  },[
    length,
    num,
    char,
    paswordGenerator
  ])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800 ">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            placeholder="Password"
            className="outline-none w-full py-2 px-3"
            readOnly
          />
          <button className="outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0">
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              value={length}
              min={8}
              max={100}
              className="cursor-pointer"
              onChange={(e) => {
                setLenght(e.target.value);
              }}
            />
            <label>length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
             defaultChecked={num}
             onChange={() => {
              setNum((prev) => !prev)
             }} />
             <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
             defaultChecked={char}
             onChange={() => {
              setChar((prev) => !prev)
             }} />
             <label htmlFor="numberInput">Special Characterr</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;