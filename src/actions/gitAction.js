import { fetchRepos } from '../services/gitService';

export const SET_REPOS = 'SET_REPOS';

const getRepos = orgName => async (dispatch) => {
    try {
        // fetch top 50 repos by organization name.
        const response = await fetchRepos(orgName);
        dispatch({type: SET_REPOS, payload: response });
    } catch(error) {
        // reset the list to [], in case of errors like 404, 5XX etc.
        dispatch({type: SET_REPOS, payload: [] });
    }
};

export const fetchRepo = {
    getRepos,
};
