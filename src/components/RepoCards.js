import React from 'react';
import PropTypes from 'prop-types';

// Functional component
const RepoCards = ({ repos }) => {
    if (repos && repos.length) {
        return (
            <React.Fragment>
                {repos.map(data =>
                    <div key={data.name} className="card">
                        <div className="card-header">{data.name.toUpperCase()}</div>
                        <div className="card-body">
                            <div><i className="fas fa-exclamation-circle"></i>{data.issues}</div>
                            <div><i className="fas fa-star"></i>{data.stars}</div>
                            <div><i className="fas fa-eye"></i>{data.watchers}</div>
                        </div>
                    </div>)
                }
            </React.Fragment>
        );
    }

    return (
        <div className="nodata">
            <div className="clear"></div>
            <h3>No Data found</h3>
        </div>
    );
};

RepoCards.propTypes = {
    repos: PropTypes.array,
};

RepoCards.defaultProps = {
    list: [],
};

export default RepoCards;
