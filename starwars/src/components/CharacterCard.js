import React from 'react';

const CharacterCard = (props) => {
    return(
        <ul className = 'card'>
            <h2>
                <span>{props.charData.name}</span>
            </h2>
            <span className = 'head'>
                    Eye Color: <span className = 'notHead'>{props.charData.eye_color}</span>
            </span> 
            <ul>
                <h3><span>{props.charData.name}</span> appeared onscreen in:</h3>
                {props.charData.films.map(x => <li>{x}</li>)}
            </ul>
            <div><span className = 'head'>
                Gender: <span className = 'notHead'>{props.charData.gender}</span>
            </span></div>
            <div><span className = 'head'>
                Hair Color: <span className = 'notHead'>{props.charData.hair_color}</span>
            </span></div>
            <div><span className = 'head'>
                Height: <span className = 'notHead'>{props.charData.height}</span>
            </span></div>
            <div><span className = 'head'>
                Home World: <span className = 'notHead'>{props.charData.homeworld}</span>
            </span></div>
            <div><span className = 'head'>
                Mass: <span className = 'notHead'>{props.charData.mass}</span>
            </span></div>
            <div><span className = 'head'>
                Birth Year: <span className = 'notHead'>{props.charData.birth_year}</span>
            </span></div>
            <div><span className = 'head'>
                Skin Color: <span className = 'notHead'>{props.charData.skin_color}</span>
            </span></div>
            <h3>Species Link:</h3>
            <ul>
                 {props.charData.species.map(x => <li>{x}</li>)}
            </ul>
            <h3>Starship Links:</h3>
            <ul>
                 {props.charData.starships.map(x => <li>{x}</li>)}
            </ul>
            <h3>Vehicle Links:</h3>
            <ul>
                 {props.charData.vehicles.map(x => <li>{x}</li>)}
            </ul>
        </ul>
                              
        
    )
}

export default CharacterCard;
