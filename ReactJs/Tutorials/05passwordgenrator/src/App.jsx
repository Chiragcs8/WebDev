import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  console.log(
    "Making PasswordGenrator using diifernt types of hooks and optimizinge it"
  );

  // State to manage password length, numbers, characters, and generated password
  const [length, setLength] = useState(8); // Default password length is 8
  const [numallow, setNumallow] = useState(false); // Boolean to allow numbers in password
  const [charallow, setCharallow] = useState(false); // Boolean to allow special characters
  const [Password, setPassword] = useState(); // Stores generated password

  // useRef hook to reference the password input field for copy functionality
  const passwordRef = useRef(null);

  // Function to generate password using letters, and optionally numbers or special characters
  const passwordGenrator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; // Default string with letters
    if (numallow) str += "0123456789"; // If numbers are allowed, add digits
    if (charallow) str += "!@#$%^&*_-+=~`"; // If special characters allowed, add special chars

    // Loop to generate random characters from the available pool based on selected length
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char); // Add random character to password
    }

    setPassword(pass); // Set generated password to state
  }, [length, numallow, charallow, setPassword]);

  // Function to copy generated password to clipboard
  const copyPasswordToClipbord = useCallback(() => {
    passwordRef.current?.select(); // Selects the text in the password input
    passwordRef.current?.setSelectionRange(0, 101); // Set selection range for clipboard copying
    window.navigator.clipboard.writeText(Password); // Writes selected text to clipboard
  }, [Password]);

  // useEffect to regenerate password when length, numallow, or charallow changes
  useEffect(() => {
    passwordGenrator(); // Calls password generator every time dependencies change
  }, [length, numallow, charallow, passwordGenrator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3">Password generator</h1>

        {/* Input box to display generated password */}
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={Password} // The generated password shown in this input
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly // Input is read-only as the password cannot be edited directly
            ref={passwordRef} // Ref to the password input for copy-to-clipboard functionality
          />
          <button
            onClick={copyPasswordToClipbord} // Button to copy password to clipboard
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            Copy
          </button>
        </div>

        {/* Password customization controls */}
        <div className="flex text-sm gap-x-2">
          {/* Slider to adjust password length */}
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6} // Minimum password length of 6 characters
              max={100} // Maximum password length of 100 characters
              value={length} // Reflects the current selected length
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value); // Updates length state on slider change
              }}
            />
            <label> Length: {length}</label>{" "}
            {/* Displays current password length */}
          </div>

          {/* Checkbox to toggle inclusion of numbers in the password */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numallow} // Reflects current number inclusion status
              id="numInput"
              onChange={() => {
                setNumallow((prev) => !prev); // Toggles the number inclusion
              }}
            />
            <label htmlFor="numInput">Numbers</label>
          </div>

          {/* Checkbox to toggle inclusion of special characters in the password */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charallow} // Reflects current special character inclusion status
              id="charInput"
              onChange={() => {
                setCharallow((prev) => !prev); // Toggles the special character inclusion
              }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
