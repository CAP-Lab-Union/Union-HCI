import Image from 'next/image';

export default function Contact() {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ textAlign: 'center', fontSize: '3rem', fontWeight: 'bold' }}>How to Reach Us</h1>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', flexWrap: 'wrap' }}>
                <div style={{ maxWidth: '400px', textAlign: 'center' }}>
                    <h3>Visit Us</h3>
                    <p>CAP Lab ISEC Basement</p>
                </div>

                <div style={{ maxWidth: '400px', textAlign: 'center' }}>
                    <h3>Email Us</h3>
                    <p>mahajans@union.edu</p>
                </div>

            </div>

            <div style={{ marginTop: '40px', textAlign: 'center' }}>
                <h2>Send Us a Message</h2>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '500px', margin: '0 auto' }}>
                    <input
                        type="text"
                        placeholder="Your Name"
                        style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
                    />
                    <textarea
                        placeholder="Your Message"
                        rows="5"
                        style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
                    />
                    <button
                        type="submit"
                        style={{
                            padding: '10px',
                            borderRadius: '5px',
                            backgroundColor: '#007BFF',
                            color: '#fff',
                            border: 'none',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                        }}
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}
