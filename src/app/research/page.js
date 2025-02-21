'use client'
import { useState, useEffect } from "react";
//To add another project, copy paste the existing one and change the values.
const projects = [
    {
        title: 'Gesture Recognition for Sports Analysis with Large Screens',
        description: 'The project focuses on using gesture recognition to analyze player poses and provide feedback. Coaches and players can interact with large displays to review and improve technique.',
        People: "James, Advitya, Kshitij, Victor"

    },
    {
        title: 'AR for Math education',
        description: 'This project explores the use of augmented reality (AR) to provide interactive, 3D visualizations of complex mathematical concepts. The project aims to assess the effectiveness of AR in increasing student motivation and performance in advanced math courses.',
        People: "Ayanat"

    },
    {
        title: 'Designing Technological Immersive Spaces for Mental Health and Wellbeing',
        description: 'This project explores the design of large immersive environments that promote mental health and well-being through interactive displays and responsive soundscapes. Using gesture and movement-based interactions, the system adapts visual and auditory elements in real time to create a calming and engaging experience. The research focuses on how these dynamic environments can support stress reduction, mindfulness, and emotional well-being through embodied interaction..',
        People: "Ramissa, Ella"

    },
    {
        title: 'Redesigning Notifications to be less anxiety causing for students',
        description: ' This project focuses on redesigning notifications in educational platforms to reduce student anxiety while maintaining engagement and productivity. By applying user-centered design principles, it explores alternative notification styles, timing, and language that minimize stress while providing essential updates. The goal is to create a more supportive and less intrusive notification system that enhances the learning experience without overwhelming students.',
        People: "Luodi"

    },
];

export default function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    const prevSlide = () => {
        setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 4000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <div className="relative w-full h-screen flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-5">Current Projects</h1>
            <div className="relative w-3/4 h-3/4 border-2 border-gray-300 rounded-lg">
                <div className="relative h-full overflow-hidden rounded-lg">
                    {/* In order to dispay the array contents, we use map */}
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            // styles from tailwind and making it look nice
                            className={`absolute block w-full h-full top-0 left-0 transform transition-transform duration-700 ease-in-out ${activeIndex === index ? "translate-x-0" : "translate-x-full"
                                }`}
                            style={{
                                border: '1px solid #A0C8D6', //Color that we chose as the border color
                                borderRadius: '10px',
                                padding: '40px',
                                textAlign: 'center',
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                backgroundColor: '#3994B2',
                                color: 'black',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingLeft: '60px',
                                paddingRight: '60px'
                            }}
                        >
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{project.title}</h2>
                            <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Team: {project.People}</p>
                            <p style={{ marginTop: '20px' }}>{project.description}</p>
                        </div>
                    ))}
                </div>
                <div className="absolute z-30 flex -translate-x-1/2 space-x-3 bottom-5 left-1/2">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`w-3 h-3 rounded-full ${activeIndex === index ? "bg-white" : "bg-gray-500"
                                }`}
                            aria-label={`Slide ${index + 1}`}
                        ></button>
                    ))}
                </div>
                <button
                    onClick={prevSlide}
                    className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50">
                        &#9664;
                    </span>
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50">
                        &#9654;
                    </span>
                </button>
            </div>
        </div>
    );
}