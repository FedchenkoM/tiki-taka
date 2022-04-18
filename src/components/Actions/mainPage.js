import axios from 'axios';
import { getAllChampionshipsAC } from '../../redux/reducers/mainPageReducer';

export const getAllChampionshipList = () => {
    return async (dispatch) => {
        const response = await axios.get(`https://api-football-standings.azharimm.site/leagues`)
        dispatch(getAllChampionshipsAC(response.data))
    }
}