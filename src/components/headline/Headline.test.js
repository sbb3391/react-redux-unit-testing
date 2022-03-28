/* eslint-disable testing-library/await-async-query */
import React from 'react';
import { shallow } from 'enzyme';
import Headline from './Headline.component'


import { findByTestAttr, checkProps } from '../../../Utils';

const setup = (props = {}) => {
    const component = shallow(<Headline {...props} />);
    return component
} 

describe("Headline component", () => {

    describe('Checking prop types', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                header: "Test Header",
                desc: "Test Description",
                tempArr: [{
                    fName: "First Name Test",
                    lName: 'Last',
                    email: 'test email',
                    age: 31,
                    onlineStatus: true
                }]
            }

            const propsErr = checkProps(Headline, expectedProps)

            expect(propsErr).toBe(undefined);
        });
    });

    describe("have props", () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                header: "Test Header",
                desc: "Test Description"
            }

            wrapper = setup(props);
        })

        it('Should render without errors', () => {
            const component = findByTestAttr(wrapper, 'headlineComponent');
            expect(component.length).toBe(1)
        })

        it("Should render an H1", () => {
            const h1 = findByTestAttr(wrapper, 'header')

            expect(h1.length).toBe(1)
        })

        it("Should render a description", () => {
            const description = findByTestAttr(wrapper, 'desc');
            expect(description.length).toBe(1);
        })
    });

    describe("have no props", () => {
        let wrapper;
        beforeEach(() => {

            wrapper = setup();
        })

        it("Should not render", () => {
            const component = findByTestAttr(wrapper, 'headlineComponent');
            expect(component.length).toBe(0);
        })

    });

})