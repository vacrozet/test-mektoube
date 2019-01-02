import { put, takeLatest, call } from 'redux-saga/effects'
import axios from 'axios'

function axiosCall (tab) {
  console.log(tab)
  return axios.post(`https://m.mektoube.fr/api/gate/flo98732.json?login=${tab[0]}&password=${tab[1]}&validitySeconds=7776000`
  ).then(data => ({ data }))
    .catch(ex => {
      console.log('parsing failed', ex)
      return ({ ex })
    })
}

function * appellApi (dt) {
  const { data, ex } = yield call(axiosCall, dt.value)
  console.log(data)
  if (data) {
    yield put({ type: 'CONNECTED_ON', value: data.data })
  } else {
    yield put({ type: 'PRINT_ERROR', value: ex })
  }
}

export function * mySaga () {
  yield takeLatest('CONNECTION', appellApi)
}
