import * as actions from '../constants/action-types';

export function trackUserSearch(searchInput) {

    return {
        type: actions.TRACK_USER_SEARCH,
        searchInput
    };
}

export function flagLoading(loading) {

    return {
        type: actions.FLAG_LOADING,
        loading
    };
}

export function getRepos(repos) {

    return {
        type: actions.GET_REPOS,
        repos
    };
}

export function getAvatar(avatar) {

    return {
        type: actions.GET_AVATAR,
        avatar
    };
}