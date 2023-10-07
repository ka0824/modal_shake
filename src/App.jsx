import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="App">
      <button onClick={handleOpen}>모달 열기</button>
      {isOpen && <Modal handleOpen={handleOpen}></Modal>}
    </div>
  );
}

export default App;
