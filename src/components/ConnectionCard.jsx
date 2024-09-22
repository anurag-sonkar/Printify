import React from 'react';

// bg = primary, as a prop
// size: sm, md, lg

function ConnectionCard({ image, bgColor, size }) {
    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();

    // Set height and width based on size prop
    let height, width;
    switch (size) {
        case 'small':
            height = '75px';
            width = '80px';
            break;
        case 'medium':
            height = '120px';
            width = '120px';
            break;
        case 'large':
            height = '160px';
            width = '160px';
            break;
            default:
                height = '140px'; 
                width = '140px';  // Default
    }

    const cardStyle = {
        backgroundColor: bgColor === 'primary' ? primaryColor : bgColor,
        borderRadius: '16px',
        cursor: 'pointer',
        transition: 'all 0.3s ease-in',
        height,   
        width,   
    };

    return (
        <div style={cardStyle} className="shadow-2xl hover:scale-110 flex items-center justify-center">
            <img src={image} alt="connection" className="object-contain max-w-full max-h-full" />
        </div>
    );
}

export default ConnectionCard;
