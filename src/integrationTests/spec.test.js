/* eslint-disable testing-library/await-async-utils */
import moxios from "moxios";
import { testStore } from '../../Utils';
import { fetchPosts } from '../actions';

describe('fetchPosts action', () => {

    beforeEach(() => {
        moxios.install();
    })

    afterEach(() => {
        moxios.uninstall();
    })

    it('Store is update correctly', () => {
        const expectedState = [
            {
                title: 'Example Title 1',
                body: 'Some Text'
            },
            {
                title: 'Example Title 1',
                body: 'Some Text'
            },
            {
                title: 'Example Title 1',
                body: 'Some Text'
            },
            {
                title: 'Example Title 1',
                body: 'Some Text'
            }
        ];

        const store = testStore();

        moxios.wait( () => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            })
        });

        return store.dispatch(fetchPosts())
            .then(() => {
                const newState = store.getState();
                expect(newState.postsReducer).toBe(expectedState);
            })

    })
})