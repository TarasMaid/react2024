import React from 'react';

interface CharacterProps {
    name: string;
    age: number;
    occupation: string;
    imageUrl: string;
}

const Character: React.FC<CharacterProps> = ({ name, age, occupation, imageUrl }) => {
    return (
        <div className="character-card">
            <img src={imageUrl} alt={`${name}`} />
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Occupation: {occupation}</p>
        </div>
    );
};

export default Character;