import React from 'react';
import { findByTestAttr, checkProps } from '../../../Utils';
import Button from './button.component';
import { shallow } from 'enzyme'

describe('Button Component', () => {
    describe('Checking PropTypes', () => {
        it('Should NOT throw a warning', () => {
            const expectedProps = {
                buttonText: 'Example Text',
                emitEvent: () => {

                }
            };
            const propsError = checkProps(Button, expectedProps)

            expect(propsError).toBe(undefined);
        })
    })
    
    describe('It renders an HTML Button', () => {
        let wrapper;
        let mockFunc = jest.fn();
        beforeEach(() => {
            const props = {
                buttonText: 'Example Text',
                emitEvent: mockFunc
            }
            wrapper = shallow(<Button {...props} />)
        })

        it('Should render a button', () => {
            // eslint-disable-next-line testing-library/await-async-query
            const button = findByTestAttr(wrapper, 'buttonComponent');

            expect(button.length).toBe(1);
        });

        it('Should run a callback on clicking the button', () => {
            // eslint-disable-next-line testing-library/await-async-query
            const button = findByTestAttr(wrapper, 'buttonComponent');
            button.simulate('click');
            const callback = mockFunc.mock.calls.length;

            expect(callback).toBe(1);
        })
    })
})