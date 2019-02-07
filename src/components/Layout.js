import React from 'react';
import PropTypes from 'prop-types';
import RepoCards from '../components/RepoCards';

// Use PureComponent to take benefit of React doing a shallow diff of props in componentShouldUpdate.
class Layout extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            stars: '',
            watchers: '',
            issues: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        // prevent page reload and form submit
        event.preventDefault();
        this.props.fetchRepo(this.state.name);
        // clear filters on new search
        this.setState({
            stars: '',
            watchers: '',
            issues: '',
        });
    }

    handleChange(filter, value) {
        // A single method to set all the filter states.
        this.setState({
            [filter]: value,
        });
    }

    render() {
        const { list } = this.props;
        const { name, stars, watchers, issues } = this.state;
        // Since it wasn't specified, we assumed AND criteria for filters
        let filteredList = [...list];
        if (stars) {
            filteredList = filteredList.filter(item => item.stars === parseInt(stars));
        }
        if (watchers) {
            filteredList = filteredList.filter(item => item.watchers === parseInt(watchers));
        }
        if (issues) {
            filteredList = filteredList.filter(item => item.issues === parseInt(issues));
        }
        return (
            <div className="container">
                <div className="booknow col-md-8 offset-md-2">
                    <div className="">
                        <form>
                            <center>
                                <div className="row">
                                    <div className="form-group col-md-8">
                                        <input type="text"
                                            className="form-control"
                                            placeholder="enter your search"
                                            id="name"
                                            value={name}
                                            onChange={(evt) => { this.handleChange('name', evt.target.value); }} />
                                    </div>
                                    <div className="col-md-4">
                                    <input type="submit"
                                        className="btn btn-info"
                                        disabled={!name}
                                        onClick={this.handleSubmit}
                                        value="Search" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-2">
                                        <h3>Filter</h3>
                                    </div>
                                    <div className="col-md-3 form-group">
                                        <input type="text"
                                            className="form-control"
                                            placeholder="Stars"
                                            value={stars}
                                            onChange={(evt) => { this.handleChange('stars', evt.target.value); }} />
                                    </div>
                                    <div className="col-md-3 form-group">
                                        <input type="text"
                                            className="form-control"
                                            placeholder="Watchers"
                                            value={watchers}
                                            onChange={(evt) => { this.handleChange('watchers', evt.target.value); }} />
                                    </div>
                                    <div className="col-md-3 form-group">
                                        <input type="text"
                                            className="form-control"
                                            placeholder="Issues"
                                            value={issues}
                                            onChange={(evt) => { this.handleChange('issues', evt.target.value); }} />
                                    </div>
                                </div>
                                <br />
                            </center>
                        </form>
                    </div>
                </div>
                <RepoCards repos={filteredList} />
            </div>
        )
    }
};

Layout.propTypes = {
    list: PropTypes.array,
    fetchRepo: PropTypes.func.isRequired,
};

Layout.defaultProps = {
    list: [],
};

export default Layout;