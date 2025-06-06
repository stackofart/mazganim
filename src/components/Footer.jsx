import React from 'react';

const Footer = ({text}) => {
    return (
        <footer style={footerStyle}>
            <p>© {new Date().getFullYear()} CleanCool. {text}</p>
        </footer>
    );
};

const footerStyle = {
    textAlign: 'center',
    height: '100px',
    padding: '1rem 0',
    fontSize: '0.9rem',
    color: '#0a4a7c',
    borderTop: '1px solid #eaeaea'
};

export default Footer;