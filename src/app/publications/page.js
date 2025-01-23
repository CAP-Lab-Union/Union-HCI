import React from 'react';

const publications = [
    {
        title: 'Research Paper 1',
        author: 'Author 1',
        year: 2021,
        link: 'http://example.com/paper1'
    },
    {
        title: 'Research Paper 2',
        author: 'Author 2',
        year: 2022,
        link: 'http://example.com/paper2'
    }
];

const Publications = () => {
    return (
        <div>
            <h1>Publications</h1>
            <ul>
                {publications.map((publication, index) => (
                    <li key={index}>
                        <a href={publication.link} target="_blank" rel="noopener noreferrer">
                            {publication.title}
                        </a> by {publication.author} ({publication.year})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Publications;