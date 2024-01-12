import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [spcialchar, setSpcialchar] = useState(false);

  const passwordRef= useRef(null)

  const passGenrater = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (spcialchar) str += "!@#$%^&*()_+~";

    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, spcialchar]);

  const copyToclipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current.select()
}

  useEffect(() => {
    passGenrater();
  }, [length, numberAllowed, spcialchar, passGenrater]);

  return (
    <section className=" bg-gray-800 w-full max-w-lg h-[20vh] mx-auto shadow-md rounded-lg px-4 py-4 my-20">
      <h1 className=" text-red-500">Password Generator</h1>
      <label className="text-white mt-2">password</label>
      <div className="flex shadow rounded-lg overflow-hidden mb-8">
        <input
          type="text"
          className=" outline-none w-full py-1 px-3"
          value={password}
          readonly
          ref={passwordRef}
        />
        <button onClick={copyToclipboard} className=" outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
          copy
        </button>
      </div>

      <div className="flex text-sm gap-x-4">
        <div className=" flex items-center gap-x-1">
          <input
            type="range"
            min="6"
            max="32"
            value={length}
            className=""
            onChange={(e) => setLength(e.target.value)}
          />
          <label className=" text-white">length: {length}</label>
        </div>

        <div className=" flex items-center gap-x-1">
          <input
            type="checkbox"
            value={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label className=" text-white">number</label>
        </div>

        <div className=" flex items-center gap-x-1">
          <input
            type="checkbox"
            value={spcialchar}
            onChange={() => setSpcialchar((prev) => !prev)}
          />
          <label className=" text-white">special characters</label>
        </div>
      </div>
    </section>
  );
}

export default App;
