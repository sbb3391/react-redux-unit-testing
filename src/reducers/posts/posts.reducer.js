// reducers are pure functions - this is isn't going to make any changes outside the scope of the function
// shouldn't be complex - all you're trying to do is return a new copy of state with some change

import { types } from '../../actions/types'


const reducer = (state = [], action) => {
    switch(action.type) {
        case types.GET_POSTS:
            return action.payload;
        default:
            return state;
    }
}

export default reducer