import React from 'react'

import Rx from 'rx'

import Log from './log.js'

var refLog = null;

const add = ()=>{
  Rx.Observable.range(1,50).reduce((acc,v)=>{
    return acc + v;
  }).subscribe((data)=>{
    refLog.info('warn',data)
  })
}

const add2 = ()=>{
  Rx.Observable.range(1,50)
  .map((x)=>x*x)
  .reduce((acc,v)=>{
    return acc + v;
  }).subscribe((data)=>{
    refLog.info('warn',data)
  })
}

class Base extends React.Component{



  render(){
    return(
      <div style={{width:"100%",display:"flex",flexDirection:"column"}}>
        <h3>需求场景：一些比较基础的用法</h3>
        <input type="button" value="累加器(1+50)" onClick={add} />
        <input type="button" value="累加器(1^2+50^2)" onClick={add2} />

        <input type="button" value="Clear Log" onClick={()=>{refLog.clear();this.setState({show:false})}}/>


        <div style={{width:"100%"}}>
          <Log ref={(ref)=>{refLog = ref}} />
        </div>


      </div>
    )
  }
}


export default Base
