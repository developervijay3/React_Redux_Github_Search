import React from 'react';
import { shallow } from 'enzyme';
import RepoCards from '../../components/RepoCards';

it('renders RepoCards with No data found if the list is empty', () => {
    const wrapper = shallow(<RepoCards />);
    expect(wrapper.text()).toBe('No Data found');
});

it('renders RepoCards with No data found if the list is empty', () => {
    const wrapper = shallow(<RepoCards repos={[{
        name: 'Octokit',
        issues: 102,
        stars: 111,
        watchers: 5,
    }]}/>);
    
    expect(wrapper.find('.card-header').text()).toBe('OCTOKIT');
    const body = wrapper.find('.card-body div');
    expect(body.find('div').at(0).text()).toBe('102');
    expect(body.find('div').at(1).text()).toBe('111');
    expect(body.find('div').at(2).text()).toBe('5');
});