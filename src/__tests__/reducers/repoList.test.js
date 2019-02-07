import reducer from '../../reducers/repoList';
import { SET_REPOS } from '../../actions/gitAction';

describe('Should expose function to reduce the repo state', () => {
    it('Should return initial state', () => {
        expect(reducer(undefined, { type: SET_REPOS, payload: [1, 2] })).toEqual({
            data: [1, 2],
        });
    });

    it('Should return default state if no matching ', () => {
        expect(reducer(undefined, { type: 'UNMATCHED_ACTION', payload: [] })).toEqual({
            data: [],
        });
    });
});
