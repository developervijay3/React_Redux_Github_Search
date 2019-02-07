import { mapStateToProps, mapDispatchToProps } from '../../containers/Layout';

describe('Layout App', () => {
  it('mapStateToProps', () => {
    const actual = mapStateToProps({ repoReducer: { data: [] } });
    expect(actual).toEqual({
        list: [],
    });
  });

  it('mapDispatchToProps', () => {
    const dispatch = jest.fn();
    const actual = mapDispatchToProps(dispatch);
    actual.fetchRepo();
    expect(dispatch.mock.calls.length).toBe(1);
  });
});
