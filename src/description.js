import React from 'react'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const A = ()=>{
  return(
    <div className="page">
      <h1>Reactive Extensions</h1>
      <h2>
        github repo1:<a target="_blank" href="https://github.com/Reactive-Extensions/RxJS" >https://github.com/Reactive-Extensions/RxJS</a>
      </h2>
      <h2>
        github repo2:<a target="_blank" href="https://github.com/ReactiveX/rxjs" >https://github.com/ReactiveX/rxjs</a>
      </h2>
    </div>
  )
}

const B = ()=>{
  return(
    <div className="page">
      <h1>FRP(Functional Reactive Programming)</h1>
    </div>
  )
}

const C = ()=>{
  return(
    <div className="page">
      <img src="/AIimQ8C.jpg" />
    </div>
  )
}

export default class Description extends  React.Component{

  constructor(){
    super()
    this.state={
      current:0
    }
    this.index = 2;
  }

  componentDidMount(){
    const stream =  Rx.Observable.fromEvent(this.refs.div,'click')
    stream.buffer(()=>stream.debounce(250))
    .map((list)=>list.length)
    .filter(x => x>=2)
    .subscribe(x => {
       if(x==2){
         this.state.current<this.index?this.setState({current:this.state.current+1}):null
       }
        else {
          this.state.current>0?this.setState({current:this.state.current-1}):null
        }
     });
  }

  render(){
    return(
      <div className="description" style={{height:"100%",width:"100%",display:"flex"}}
        ref="div">

        <ReactCSSTransitionGroup
          component="div"
          style={{display:"flex",height:"100%",width:"100%"}}
          transitionName="example" transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
         {(()=>{
           switch (this.state.current) {
             case 0:
                return <A key="a"/>
               break;
              case 1:
                return <B key="b" />
              case 2:
                return <C key="c" />
             default:

           }
         })()}
       </ReactCSSTransitionGroup>
      </div>
    )
  }
}