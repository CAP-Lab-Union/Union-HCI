import React from 'react';

export default function Contact() {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ textAlign: 'center', fontSize: '3rem', fontWeight: 'bold' }}>How to Reach Us</h1>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfnLNYHrqn8cLafeIZfypNLAInszbG83FhSPlJFubb6oqUTJQ/viewform?usp=dialog"
                    width="640"
                    height="800"
                    style={{ border: 'none', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                    title="Contact Form"
                >
                    Loading…
                </iframe>
            </div>
        </div>
    );
};