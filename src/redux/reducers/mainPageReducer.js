const GET_ALL_CHAMPIONSHIP_LIST = 'GET_ALL_CHAMPIONSHIP_LIST'

const defaultState = {
    allChampionshipsList: []
}

export const mainPageReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_ALL_CHAMPIONSHIP_LIST:
            return {
                ...state,
                allChampionshipsList: action.payload.data
            }
        default:
            return state
    }

}

export const getAllChampionshipsAC = (allChampionshipsList) => (
    {
        type: GET_ALL_CHAMPIONSHIP_LIST,
        payload: allChampionshipsList
    }
)