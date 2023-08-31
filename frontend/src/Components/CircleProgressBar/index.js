import React from 'react';
import './style.scss'; // Importez votre fichier CSS

const CircularProgressBar = ({ percentage }) => {
    const radius = 50; // Rayon du cercle
    const circumference = 2 * Math.PI * radius; // Circonférence du cercle

    // Calculez le strokeDashoffset pour représenter la progression
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    // Calculez la taille du conteneur en fonction du rayon et ajoutez une marge pour le texte
    const containerSize = radius * 2 + 10; // 10px de marge pour le texte

    return (
        <div className="circular-progress" style={{ width: containerSize, height: containerSize }}>
            <svg width={containerSize} height={containerSize} viewBox={`0 0 ${containerSize} ${containerSize}`}>
                <circle
                    className="circle-background"
                    cx={containerSize / 2}
                    cy={containerSize / 2}
                    r={radius}
                />
                <circle
                    className="circle-progress"
                    cx={containerSize / 2}
                    cy={containerSize / 2}
                    r={radius}
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                />
                <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dy="0.35em"
                    className="percentage-text"
                >
                    {percentage}%
                </text>
            </svg>
        </div>
    );
};

export default CircularProgressBar;
