import { useState } from "react";
export default function Input() {
  let [myInput, setMyInput] = useState("");
  function handle_input(e) {
    //console.log(e);
    //console.log(e.target);
    console.log(e.target.value);
    setMyInput(e.target.value);
  }

  return (
    <>
      <label>enter ur feedback</label>
      <input value={myInput} onChange={handle_input}></input>
      {/* kda al value bta3t al input khletha = al myInput ya3ny ana bgeb al gema aly fe al var w a7otha fe al input field
      w kol ma bktb 7aga fe al input al onChange bt4t8l w tnady 3la al handle_input aly bt3ml SetInput be aly kan maktob fe al input w 
      t2om 7ta al gema deh fe al MyInput w 2a2om ana 7att al input field = le al myInput dah */}
    </>
  );
}
