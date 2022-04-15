const GET_ALL_CHAMPIONSHIPS = 'GET_ALL_CHAMPIONSHIPS'

const defaultState = {
    allChampionshipsList: []
}

export const mainPageReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_ALL_CHAMPIONSHIPS:
            return {
                ...state,
                allChampionshipsList: action.payload
            }
        default:
            return state
    }

}

export const getAllChampionshipsAC = (allChampionshipsList) => (
    {
        type: GET_ALL_CHAMPIONSHIPS,
        payload: allChampionshipsList
    }
)