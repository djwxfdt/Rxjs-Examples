import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory ,IndexRoute ,Link} from 'react-router'

import MultipleData from './multipleData.js'
import MultipleClick from './multipleClick.js'
import ComplicatedKeyEvents from './complicatedKeyEvents.js'

import BaiduSuggestions from './getBaiduSuggestions.js'

const App =  (props)=>{
  return(
    <div style={{display:"flex",flexDirection:"row",width:"100%",height:"100%"}}>
      <div style={{display:"flex",width:"20%",flexDirection:"column",height:"100%"}} className="links">

          <Link to="/">MultipleData</Link>

          <Link to="/MultipleClick">MultipleClick</Link>

          <Link to="/ComplicatedKeyEvents">ComplicatedKeyEvents</Link>

          <Link to="/BaiduSuggestions">BaiduSuggestions</Link>


      </div>
      <div style={{display:"flex",flexGrow:1}}>{props.children}</div>
     </div>
  )
}


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={MultipleData} />
      <Route path="MultipleClick" component={MultipleClick} />
      <Route path="ComplicatedKeyEvents" component={ComplicatedKeyEvents} />
      <Route path="BaiduSuggestions" component={BaiduSuggestions} />


    </Route>
  </Router>
  ,document.getElementById('app')
)
