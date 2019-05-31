import React from 'react';
import CharacterCard from './CharacterCard'

const CardContainer = (props) => {
    return(
        <div>
            {props.data.map((char, i) => <CharacterCard charData = {props.data[i]}/>)}
        </div>
    )
}

export default CardContainer;