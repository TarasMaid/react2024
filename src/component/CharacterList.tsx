import React from 'react';
import Character from './Character';
import './CharacterList.css';


const characters = [
    {
        name: 'Homer Simpson',
        age: 39,
        occupation: 'Nuclear Safety Inspector',
        imageUrl: 'https://static.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png',
    },
    {
        name: 'Marge Simpson',
        age: 36,
        occupation: 'Housewife',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png',
    },
    {
        name: 'Bart Simpson',
        age: 10,
        occupation: 'Student',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png',
    },
    {
        name: 'Lisa Simpson',
        age: 8,
        occupation: 'Student',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png',
    },
    {
        name: 'Maggie Simpson',
        age: 1,
        occupation: 'Baby',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png',
    },
];

const CharacterList: React.FC = () => {
    return (
        <div className="character-list">
            {characters.map((character) => (
                <Character key={character.name} {...character} />
            ))}
        </div>
    );
};

export default CharacterList;
