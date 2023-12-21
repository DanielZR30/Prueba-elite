import React, { useEffect, useState } from "react";
import axios from 'axios';
import CardHouse from "../CardHouse/CardHouse";
import CharacterCard from "../CharacterCard/CharacterCard";
import ClipLoader from "react-spinners/ClipLoader";


export const CharacterByHouse = () => {
    const houses = [{
        name:'gryffindor',
        color:'red'
    },{
        name:'hufflepuff',
        color:'yellow'
    },{
        name:'ravenclaw',
        color:'sky'
    },{
        name:'slytherin',
        color:'teal'
    }]
    const [houseS,setHouseS] = useState(houses[0])
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios(`http://localhost:3001/api/v1/potter/gryffindor`)
            .then(response => {
                setCharacters(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching characters:', error);
                setIsLoading(false);
            });
    }, []);


    let handleCharacters = (houseName) =>{
        axios(`http://localhost:3001/api/v1/potter/${houseName}`)
            .then(response => {
                setCharacters(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching characters:', error);
                setIsLoading(false);
            });
    }

    return (
        <div className="h-full">
            <div className="flex h-1/2">
                {
                    houses.map((house) => (
                        <CardHouse key={house.name} house={house} handleClick={() => handleCharacters(house.name)}/>
                    ))
                }
            </div>
            <div className="grid grid-cols-4 gap-4 h-1/2">
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
        </div>
    );
};