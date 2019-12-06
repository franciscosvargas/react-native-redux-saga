import { all, takeLatest, call, put} from 'redux-saga/effects';
import api from '../../services/api';
import * as LoginActions from '../actions/login';

import { navigate } from '../../services/navigation';

function* login(action) {
    // yield call(api.get, '/users/username')
    // yield put(LoginActions.loginSuccess(action.payload.username))
    // navigate('Route Name')
}

export default function* rootSaga() {
    return yield all([
        takeLatest('LOGIN_REQUEST', login),
    ]);
}