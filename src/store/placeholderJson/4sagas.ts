import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import { BusinessActionTypes } from './1types';
import { fetchBusinessesSuccess, fetchBusinessesFailure } from './2actions';
import apiCall from '../../utils/apiCall';

const API_ENDPOINT = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3';

function* handleFetch() {
    try {
        // 1 use redux-saga's call() to call your async functions
        const res = yield call(apiCall, 'GET', API_ENDPOINT, '/businesses/search?location=los angeles&term=pizza');

        if (res.error) {
            yield put(fetchBusinessesFailure(res.error))
        } else {
            yield put(fetchBusinessesSuccess(res.businesses))
        }
    } catch (err) {
        if (err instanceof Error) {
            yield put(fetchBusinessesFailure(err.stack!))
        } else {
            put(fetchBusinessesFailure('unknown error has occured.'))
        }
    }
}

// 2 use redux-saga's take*() functions to watch Redux for specific action type(in this case, all 'FETCH_BUSINESSES_REQUEST' type), then run the handleFetch saga
function* watchFetchRequest() {
    yield takeEvery(BusinessActionTypes.FETCH_BUSINESSES_REQUEST, handleFetch)
}

// 2 use the fork() function to split saga into multiple watchers
export default function* buinessSaga() {
    yield all([fork(watchFetchRequest)])
}
