import React from 'react';
import Character from './Character'
import './RickAndMortyCharacters.css';

const characters = [
    {
        name: 'Rick Sanchez',
        age: 70,
        occupation: 'Scientist',
        imageUrl: 'https://example.com/rick.png',
    },
    {
        name: 'Morty Smith',
        age: 14,
        occupation: 'Student',
        imageUrl: 'https://example.com/morty.png',
    },
    {
        name: 'Summer Smith',
        age: 17,
        occupation: 'Student',
        imageUrl: 'https://example.com/summer.png',
    },
    {
        name: 'Beth Smith',
        age: 34,
        occupation: 'Horse Surgeon',
        imageUrl: 'https://example.com/beth.png',
    },
    {
        name: 'Jerry Smith',
        age: 35,
        occupation: 'Unemployed',
        imageUrl: 'https://example.com/jerry.png',
    },
];

const RickAndMortyCharacters: React.FC = () => {
    return (
        <div className="character-list">
            {characters.map((character) => (
                <Character key={character.name} {...character} />
            ))}
        </div>
    );
};

export default RickAndMortyCharacters;