import { connect } from 'react-redux';
import { fetchRepo } from '../actions';
import Layout from '../components/Layout';

// A container component for the presentational Layout component.
// Using connect would prevent extra renders of the Layout.
export const mapStateToProps = (state) => {
    return {
        list: state.repoReducer.data,
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        fetchRepo: (orgName) => {
            return dispatch(fetchRepo.getRepos(orgName));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);