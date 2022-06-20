import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Routes, Route, unstable_HistoryRouter as HistoryRouter } from "react-router-dom"
import { createBrowserHistory } from "history"

import App from './components/App'
import SimpleList from './components/SimpleList'
import GrowShrinkButton from './components/GrowShrinkButton'
import BuggyButtons from './components/Bunnys'
import StackOperation from './components/StackOperation'
import Captcha from './Captcha'

const root = ReactDOM.createRoot(document.getElementById('root'))
const history = createBrowserHistory({ window })

root.render(
  <React.StrictMode>
    <HistoryRouter history={history}>
      <Routes>

        <Route path="/" element={<App />} >
          <Route index element={<App />} />
        </Route>

        <Route path="/simplelist" element={<SimpleList />} > </Route>
        
        <Route path="/growshrinkbutton" element={<GrowShrinkButton />} > </Route>
        
        <Route path="/BuggyButtons" element={<BuggyButtons />} > </Route>

        <Route path="/stackoperation" element={<StackOperation />} > </Route>
      
        <Route path="/captcha" element={<Captcha />} > </Route>

        <Route path="/timeline" element={<App />} >
          <Route path=":login" element={<App />} />
        </Route>

      </Routes>
    </HistoryRouter>
  </React.StrictMode>
)
