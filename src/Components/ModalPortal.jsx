import React, { useState } from "react";
import ReactDOM from "react-dom";

function ModalPortal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div style={styles.overlay}>
      <div style={styles.modal}>
        {children}
        <button onClick={onClose} style={styles.closeButton}>Confirm</button>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

const styles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    modal: {
      backgroundColor: "rgb(72, 66, 66)",
      padding: "20px",
      borderRadius: "8px",
      textAlign: "center",
    },
    closeButton: {
      marginBottom: "10px",
      marginTop:"10px"
    },
  };

export default ModalPortal;