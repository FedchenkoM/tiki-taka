import React, { useEffect } from 'react';
import './mainPage.scss';
import { useDispatch, useSelector } from 'react-redux'
import { getAllChampionshipList } from '../Actions/mainPage';
import ChampionshipCard from '../ChampionshipCard/ChampionshipCard';

const MainPage = () => {
    const dispatch = useDispatch()
    const championships = useSelector(state => state.mainPageReducer.allChampionshipsList)

    useEffect(() => {
        dispatch(getAllChampionshipList())
    }, [])
    // console.log(championships.map(championship => championship.name))

    return (
        <div className='main-page-container'>
            {championships.map((championship) =>
                <ChampionshipCard championship={championship} />
            )}
        </div>
    );
};

export default MainPage;