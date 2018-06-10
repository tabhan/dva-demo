import axios from 'axios';

export default {
    namespace: 'count',
    state: 0,
    reducers: {
        add  (count) { return count + 1 },
        minus(count) { return count - 1 },
        put  (state, {payload}) {
            return payload;
        }
    },
    effects: {
        *load(action, {call, put}){
            const {data: {count}} = yield call(axios.get, 'data.json');
            yield put({type: 'put', payload: count})
        }
    }
}