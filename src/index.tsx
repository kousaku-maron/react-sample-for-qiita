import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux' // 追加
import App from './App'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

import store from './store' // 追加

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()
