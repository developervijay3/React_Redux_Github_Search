import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { fetchRepo, SET_REPOS } from '../../actions/gitAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

it('Should set repos on successful fetch from API', () => {
    const expectedActions = [
      { type: SET_REPOS, payload: expect.any(Array) },
    ];

    const store = mockStore({
      data: {
        environment: 'lab',
      },
    });

    return store.dispatch(fetchRepo.getRepos('octokit')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });