import React from 'react';
import './Home.css';

const Home = () => {
    const images = [
        '/Preview1.png',
        '/Preview2.png',
        '/Preview3.png',
        '/Preview4.png',
        '/Preview5.png',
        '/Preview6.png'
    ];

    return (
        <div className="gallery">
            {images.map((image, index) => (
                <div className="gallery-item" key={index}>
                    <img src={image} alt={`Gallery item ${index + 1}`} />
                </div>
            ))}
        </div>
    );
};

export default Home;