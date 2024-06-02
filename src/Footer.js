// src/Footer.js
import React from 'react';
import './index.css';

function Footer() {
    return (
        <footer style={styles.footer}>
            <p>© 2024 PDF Uploader. All rights reserved.</p>
        </footer>
    );
}

const styles = {
    footer: {
        padding: '1rem',
        textAlign: 'center',
    },
};

export default Footer;
