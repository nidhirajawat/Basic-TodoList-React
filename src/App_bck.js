import { useState } from 'react';
import './App.css';  
import Button from './components/Button';
import Modal from './components/Modal';
import { Todo } from './components/todo/Todo';

function App() {

  // States
  // "use"
  const [showModal, setShowModal] = useState(false)

  // App (Parent) Component State
  // Passing State as Props (Properties)
  // Attritube

  const myCustomData = 'This is a test string';
  // const myCustomData = [];
  // const myCustomData = {};
  // const myCustomData = [{ name: "ravi", age: '20'}];
  // Function click / event
  // Updating the parent componet state by child component event

  const handleShowModal = () => {
    setShowModal(!showModal)
  }

  const handleHideModal = () => {
    setShowModal(false)
  }

  return (
    <> 
     <Button onClick={() => handleShowModal()} data={myCustomData} title="Toggle Button">
        Show Modal
     </Button>
     {/* {showModal && 
      <Modal open={true} onClose={handleHideModal}></Modal>
    } */}
    
      <Modal 
        heading="Festival Offer"
        open={showModal} 
        onClose={handleHideModal}
        buttonLabel={"Grap it Now!"}
      >
        <div>
          <i>This is a limited time offer</i>
        </div>
      </Modal>
     
     <Todo />
    </>
  );
}

export default App;