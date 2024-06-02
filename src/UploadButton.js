// src/UploadButton.js
import React from 'react';

const UploadButton = ({ onClick }) => {
    return (
        <button onClick={onClick} style={styles.button}>
            Upload
        </button>
    );
}

const styles = {
    button: {
        backgroundColor: '#4B0082',
        color: 'white',
        border: 'none',
        padding: '1rem 2rem',
        cursor: 'pointer',
        fontSize: '1rem',
        marginTop: '20px',
        alignSelf: 'center',
    },
};

export default UploadButton;
