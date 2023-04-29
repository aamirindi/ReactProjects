import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
function App() {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    
    <>
      <Navbar />
      <div className="container" my-3>
        <TextForm heading="Enter the Text to Analyze below" text={text} handleOnChange={handleOnChange}/>
      </div>
    </>
  );
}

export default App;
