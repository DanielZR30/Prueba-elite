import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "../CharacterCard/CharacterCard";
import ClipLoader from "react-spinners/ClipLoader";

export const AllCharacters = () => {
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios('http://localhost:3001/api/v1/potter/')
            .then(response => {
                setCharacters(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching characters:', error);
                setIsLoading(false);
            });
    }, []);

    return (
        <div className="grid grid-cols-4 gap-4">
            {isLoading && <ClipLoader />}
            {!isLoading && (
                <>
                    {
                        characters.map((character) => (
                            <CharacterCard key={character.id} character={character} />
                        ))
                    }
                </>
            )}
        </div>
    );
};