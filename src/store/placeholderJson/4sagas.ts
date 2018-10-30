import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import { PhotosActionTypes } from './1types';
import { fetchPhotosSuccess, fetchPhotosFailure } from './2actions';
import apiCall from '../../utils/apiCall';

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com';

function* handleFetch() {
    try {
        // 1 use redux-saga's call() to call your async functions
        const res = yield call(apiCall, 'GET', API_ENDPOINT, '/posts');

        if (res.error) {
            yield put(fetchPhotosFailure(res.error))
        } else {
            yield put(fetchPhotosSuccess(res))
        }
    } catch (err) {
        if (err instanceof Error) {
            yield put(fetchPhotosFailure(err.stack!))
        } else {
            put(fetchPhotosFailure('unknown error has occured.'))
        }
    }
}

// 2 use redux-saga's take*() functions to watch Redux for specific action type(in this case, all 'FETCH_PHOTOS_REQUEST' type), then run the handleFetch saga
function* watchFetchRequest() {
    yield takeEvery(PhotosActionTypes.FETCH_PHOTOS_REQUEST, handleFetch)
}

// 2 use the fork() function to split saga into multiple watchers
export default function* photosSaga() {
    yield all([fork(watchFetchRequest)])
}
