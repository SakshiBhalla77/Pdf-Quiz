// src/MainContent.js
import React from 'react';

function MainContent() {
    return (
        <div style={styles.mainContent}>
            <h2>Welcome to the PDF Uploader</h2>
            <p>Please upload your PDF file to extract the text.</p>
        </div>
    );
}

const styles = {
    mainContent: {
        textAlign: 'center',
        marginTop: '2rem',
    },
};

export default MainContent;
