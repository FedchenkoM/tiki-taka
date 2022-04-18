import React, { useContext } from 'react';
import './mainPage.scss';
import ChampionshipCard from '../ChampionshipCard/ChampionshipCard';
import { ChampionshipsContext } from '../App/App'
import Loader from '../Loader/Loader';

const MainPage = () => {
    const championships = useContext(ChampionshipsContext)


    if (!championships.length) return (<Loader />)

    return (
        <div className='main-page-container'>
            {championships.map((championship) =>
                <ChampionshipCard key={championship.id}
                    championship={championship} />
            )}
        </div>
    );
};

export default MainPage;