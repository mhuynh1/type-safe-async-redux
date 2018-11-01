import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import { BusinessActionTypes } from './1types';
import { fetchBusinessesSuccess, fetchBusinessesFailure, fetchReviewsFailure, fetchReviewsSuccess, fetchReviewsRequest } from './2actions';
import { callApi } from '../../utils/apiCall';

const API_ENDPOINT = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3';

function* handleBusinessesFetch() {
    try {
        // 1 use redux-saga's call() to call your async functions
        const res = yield call(callApi, 'GET', API_ENDPOINT, '/businesses/search?location=los angeles&term=pizza');

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

function* handleReviewsFetch(action: ReturnType<typeof fetchReviewsRequest>) {
    try {
        const reviews = yield call(callApi, 'GET', API_ENDPOINT, `/businesses/${action.payload}/reviews`);

        if (reviews.error) {
            yield put(fetchReviewsFailure(reviews.error))
        } else {
            yield put(fetchReviewsSuccess(reviews.reviews))
        }
    } catch (err) {
        if (err instanceof Error) {
            yield put(fetchReviewsFailure(err.stack!))
        } else {
            put(fetchReviewsFailure('unknown error has occured.'))
        }
    }
}
// 2 use redux-saga's take*() functions to watch Redux for specific action type(in this case, all 'FETCH_BUSINESSES_REQUEST' type), then run the handleFetch saga
function* watchBusinessFetchRequest() {
    yield takeEvery(BusinessActionTypes.FETCH_BUSINESSES_REQUEST, handleBusinessesFetch)
}

function* watchReviewsFetchRequest() {
    yield takeEvery(BusinessActionTypes.FETCH_REVIEWS_REQUEST, handleReviewsFetch)
}

// 3 use the fork() function to split saga into multiple watchers
export default function* businessSaga() {
    yield all([fork(watchBusinessFetchRequest), fork(watchReviewsFetchRequest)])
}