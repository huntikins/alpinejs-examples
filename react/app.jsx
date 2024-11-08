import React, { useState } from 'react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <button onClick={openModal} className="trigger-button">
        Open Modal
      </button>

      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
}

function Modal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Modal Title</h2>
        <p>This is a simple modal dialog.</p>
        <button onClick={onClose} className="close-button">
          Close Modal
        </button>
      </div>
    </div>
  );
}

export default App;
