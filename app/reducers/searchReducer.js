import * as actions from '../constants/action-types';

const initialState = {
    searchInput: ''
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.TRACK_USER_SEARCH:
            return {
                ...state,
                searchInput: action.searchInput
            };
        default:
            return state;
    }
};

export default searchReducer;