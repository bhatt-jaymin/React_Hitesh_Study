import { useState, useCallback, useEffect,useRef } from "react";

function App() {
  const [lengthpasswordCount, setLengthPasswordCount] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [specialCharacterAllowed, setspecialCharacterAllowed] = useState(false);
  const [password, setpassword] = useState("");

// useRef hook

const passwordRefHook=useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (specialCharacterAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= lengthpasswordCount; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [
    lengthpasswordCount,
    numberAllowed,
    specialCharacterAllowed,
    setpassword,
  ]);

  const copyPwdClipbrd=useCallback(()=>{
    passwordRefHook.current?.select()
    window.navigator.clipboard.writeText(password)},[password])

  useEffect(() => {
    passwordGenerator();
  }, [
    lengthpasswordCount,
    numberAllowed,
    specialCharacterAllowed,
    passwordGenerator,
  ]);
  return (
    <>
      <div className="text-3xl max-w-full  mx-auto shadow-md rounded-lg px-4 py-3 text-violet-200 bg-gray-600">
        <h3 className="text-white my-3 italic">Password Generator</h3>

        <div className="text-5xl text-center text-bold text-red-600">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 text-center text-bold rounded-lg"
            placeholder="Password"
            readOnly
            ref={passwordRefHook}  
          />

          <button onClick={copyPwdClipbrd} className="outline-4 text-red-700 bg-blue-500 px-3 py-0.5 flex-shrink-4 my-3 rounded-md">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1"></div>
          <input
            type="range"
            min={6}
            max={100}
            value={lengthpasswordCount}
            className="cursor-pointer"
            onChange={(e) => {
              setLengthPasswordCount(e.target.value);
            }}
          />
          <label className="text-3xl">Length : {lengthpasswordCount}</label>
          <div className="flex items-center gap-x-1 mx-20">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput" className="text-3xl px-3">
              Numbers
            </label>

            <input
              type="checkbox"
              defaultChecked={specialCharacterAllowed}
              id="characterInput"
              onChange={() => {
                setspecialCharacterAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput" className="text-3xl px-3">
              Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
