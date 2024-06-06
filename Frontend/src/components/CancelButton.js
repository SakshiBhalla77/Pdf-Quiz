import React from "react";

const CancelButton = ({ onClick }) => {
  return (
    <button onClick={onClick} style={styles.button}>
      Cancel
    </button>
  );
};

const styles = {
  button: {
    marginLeft: "10px", // Add some spacing between buttons
  },
};

export default CancelButton;
