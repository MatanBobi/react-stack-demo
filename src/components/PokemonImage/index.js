import React from "react";

const PokemonImage = ({src, name}) => {
    return <img src={src} alt={name}/>
};

export default PokemonImage;