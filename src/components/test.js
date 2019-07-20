// import React, { Component } from 'react';
// import { tsExternalModuleReference } from '@babel/types';

// class Testing extends React.Component{
//     constructor (props) {
//         super(props)
//         this.state={
//             counter: 102
//         }
//         this.plus = this.plus.bind(this);
//         this.minus = this.minus.bind(this);
//     }

    
//     plus() {
//          this.setState({counter: this.state.counter + 1})
//     }

//     minus() {
//         this.setState({counter: this.state.counter -1})
//     }
//     render() {
//         console.log(this.state);
//         return (
//             <div style={{position:"absolute", height:"100vh", width:'100vw', display:'grid', gridTemplateColumns:'1fr 1fr', gridTemplateRows:'1fr 1fr'}}>
//                 <div style={{background:'rgba(100,0,0,0.25)', gridColumn:'1', gridRow:'1/3',width:'100%', height:'100%', "font-size":"50",textAlign:"center",lineHeight:"100%"}}>
//                 {this.state.counter}
//                 </div> 
//                 <AddButton plus={this.plus} minus={this.minus}/> 

//         </div>
//         )
//     }


    
// }

// class AddButton extends React.Component {
//     constructor(props){
//         super(props)
//     }

//     render() {
//         return(
//         <div>
//         <div onClick={() => this.props.plus()}
//             style={{background:'rgba(0,100,0,0.25)', gridColumn:'2', gridRow:'1',width:"100%", height:'100%',fontSize:"50",textAlign:"center",lineHeight:"100%"}}>
//              +
//             </div>

//         <div onClick={() => this.props.minus()}
//             style={{background:'rgba(0,0,100,0.25)', gridColumn:'2', gridRow:'2',width:'100%', height:"100%",fontSize:"50",textAlign:"center",lineHeight:"100%"}}>
//              -
//             </div>

//         </div>
//         )
//     }
     
// }
// export default Testing; 

