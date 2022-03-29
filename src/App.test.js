/* eslint-disable testing-library/await-async-query */
import App from "./App";
import { shallow, mount } from 'enzyme';
import { findByTestAttr, testStore, checkProps } from '../Utils'
import React from 'react';

const setup = (initialState = {}) => {
    // how to test a component connected to redux store (dive method) - otherwise you just get the outline of the Provider...
    // and not the child elements of the App component

    const store = testStore(initialState);
    const wrapper = shallow(<App store={store} />).childAt(0).dive();
    // const wrapper = mount(<App store={store} />)
    return wrapper;
}


describe('App Component', () => {
    describe('Checking PropTypes', () => {
        it('Should NOT throw a warning', () => {
            const expectedProps = {
                posts: [],
                fetchPosts: () => {

                }
            };
            const propsError = checkProps(App, expectedProps)

            expect(propsError).toBe(undefined);
        });
    });
    
    let wrapper;
    beforeEach(() => {
        const initialState = {
            posts: [
                {
                    title: 'Example Title',
                    body: 'Some Text'
                },
                {
                    title: 'Example Title',
                    body: 'Some Text'
                },
                {
                    title: 'Example Title',
                    body: 'Some Text'
                }
            ]
        };
        wrapper = setup(initialState);
    })

    it('Should render without errors', () => {
        const component = findByTestAttr(wrapper, 'appComponent');
        expect(component.length).toBe(1);
    });
})