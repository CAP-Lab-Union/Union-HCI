export default function Research() {
    const projects = [
        {
            title: 'Mediapipe',
            description: 'Descripton',
        },
        {
            title: 'Augmented Reality',
            description: 'Description',
        },
        {
            title: 'Large Screen',
            description: 'Description.',
        },
        {
            title: 'Project 4',
            description: 'Description',
        },
    ];
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
            <h1 style={{ textAlign: 'center', fontSize: '3rem', fontWeight: 'bold' }}>Current Projects</h1>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginTop: '40px' }}>
                {projects.map((project, index) => (
                    <div
                        key={index}
                        style={{
                            border: '1px solid var(--border-color)',
                            borderRadius: '10px',
                            padding: '20px',
                            width: '300px',
                            textAlign: 'center',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                            backgroundColor: 'var(--div-background-color)',
                            color: 'var(--text-color)'
                        }}
                    >
                        <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>{project.title}</h2>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
};