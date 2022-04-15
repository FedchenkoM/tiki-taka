import React from 'react';
import './championshipCard.scss';

const ChampionshipCard = (props) => {
    const championship = props.championship
    return (
        <div className='card-container'>
            <img src={championship.logos.light}
                alt={championship.name}
                title={championship.name} />
        </div>
    );
};

export default ChampionshipCard;