/* eslint-disable testing-library/await-async-query */
import React from "react";
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../Utils'
import ListItem from "./listItem.component";

describe("ListItem Component", () => {
    describe('Checking PropTypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                title: 'Test Title',
                desc: 'Example Desc'
            }
            // eslint-disable-next-line testing-library/await-async-query
            const propsErrors = checkProps(ListItem, expectedProps)

            expect(propsErrors).toBe(undefined);
        });
    });

    describe('Renders', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                title: 'Test Title',
                desc: 'Example Desc'
            }
            wrapper = shallow(<ListItem {...props} />)
        });

        it('renders listItem Div without Error', () => {
            const component = findByTestAttr(wrapper, 'listItemComponent');

            expect(component.length).toBe(1);
        });

        it('Should render a title', () => {
            const title = findByTestAttr(wrapper, 'title');

            expect(title.length).toBe(1);
        })

        it('Should render a description', () => {
            const desc = findByTestAttr(wrapper, 'desc');

            expect(desc.length).toBe(1);
        })
    });

    describe('Should NOT render', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                desc: 'Example Desc'
            }
            wrapper = shallow(<ListItem {...props} />)
        });

        it('Component is not rendered without a title', () => {
            const component = findByTestAttr(wrapper, 'ListItemComponent')

            expect(component.length).toBe(0);
        })
    })
});