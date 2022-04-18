import React, { createContext, useEffect } from 'react';
import './app.scss';
import '../../assets/styles/reset.scss';
import '../../assets/styles/common.scss'
import Header from '../Header/Header';
import RouteComponent from '../Routes/RouteComponent';
import { useDispatch, useSelector } from 'react-redux'
import { getAllChampionshipList } from '../Actions/mainPage';

export const ChampionshipsContext = createContext([])

const App = () => {
    const dispatch = useDispatch()
    const championships = useSelector(state => state.mainPageReducer.allChampionshipsList)

    useEffect(() => {
        dispatch(getAllChampionshipList())
    }, [])

    return (
        <div className="app-wrapper">
            <div className="container">
                <Header />
                <ChampionshipsContext.Provider value={championships}>
                    <RouteComponent />
                </ChampionshipsContext.Provider>
            </div>
        </div>
    );
};

export default App;        