import { actions } from "./actions";
import {put, takeEvery, delay} from 'redux-saga/effects';

function* authenticateTrueAsync(){
    yield delay(4000);
    yield put({type: actions.SET_AUTHENTICATED_TRUE_ASYNC, payload: {}})
}

export function* watchAuthenticationTrue(){
    yield takeEvery(actions.SET_AUTHENTICATED_TRUE, authenticateTrueAsync);
}