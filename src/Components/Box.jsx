import React, { useCallback } from "react";
import { useState } from "react";

const Box = () => {
  const [length, setlength] = useState(8);
  const [nums, setnums] = useState(false);
  const [characters, setcharacters] = useState(false);
  const [password, setpassword] = useState("");

  const passwrdgen = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (nums) str += "1234567890";
    if (characters) str += "!@#$%^&*";

    for (let index = 0; index < length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setpassword(pass);
  }, [length, nums, characters, password]);

  const CopyPass = () => {
    window.navigator.clipboard.writeText(password)
  }


  return (
    <div className="main-box h-screen bg-slate-800 flex justify-center items-center">
      <div className="box rounded-lg bg-zinc-500 border border-white flex-col">
        <div className="inputdiv rounded-lg bg-white flex gap-3 p-8">
          <input
            className="w-full border-[10px] rounded-md font-bold"
            type="text"
            value={password}
            placeholder="Password will appear here"
            readOnly
          />
          <button onClick={CopyPass} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Copy
          </button>
        </div>
        <div className="down flex p-4 gap-5">
          <input
            className="w-full"
            onChange={(e) => setlength(e.target.value)}
            type="range"
            min={8}
            max={20}
            id="myRange"
            onClick={() => passwrdgen()}
          />
          <label htmlFor="myRange">{length}</label>
          <input
            onClick={() => setnums((prev) => !prev)}
            type="checkbox"
            name="Numbers"
            id="num"
          />
          <label htmlFor="num">Number</label>
          <input
            onClick={() => setcharacters((prev) => !prev)}
            type="checkbox"
            name="Character"
            id="char"
          />
          <label htmlFor="char">Characters</label>
        </div>
      </div>
    </div>
  );
};

export default Box;
