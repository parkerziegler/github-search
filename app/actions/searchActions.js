import * as actions from '../constants/action-types';

export function trackUserSearch(searchInput) {

    return {
        type: actions.TRACK_USER_SEARCH,
        searchInput
    };
}