import logo from "./logo.svg";
import "./App.css";
import Input from "./input";
// hst5dm hna al useState w deh btrg3 arr gwaha 7agten => value w function w bta5od parameter wa7ed w hwa al intial value aly hbd2 beha
// w al function aly btrg3ha deh aly b8er beha al value w bnmsk kol 3onsr fe al arr b var awl wa7ed msln hsmeh
// name w al tany setName aly hwa al func
import { useState } from "react"; //this how we import hooks w al hooks deh 3obara 3n function 3adya
function App() {
  return (
    <div className="App">
      <Btn />
      <hr></hr>
      <Input />
    </div>
  );
}
function Btn() {
  console.log(useState("omar")); // bos 3la al console w shof al output
  let state = useState("omar"); // kda ana nadet 3la al hook dah w b3tlo omar ka intial value kda al state deh arr w gwaha [value , func]
  let name = state[0]; //hmsk al value
  let setName = state[1]; // hmsk al func 34an a4t8l beha
  let [name2, setName2] = useState("omar"); // mmkn ast5dm al distructure a7sn bdl ma aktb kza str
  function btn_clicked() {
    if (name == "omar") setName("khaled"); //nadet 3la al func w b3tlha khaled
    else setName("omar");
  } // b2olo lw maktob omar khleha khald w al3ks
  return (
    <div>
      <h2>{name}</h2>
      <button onClick={btn_clicked}>click to change</button>
    </div>
  );
}

export default App;
