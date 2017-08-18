import React,{Component} from 'react';

export default class TodoInput extends Component{

  submit(e){
    if (e.key === 'Enter') {
      console.log("e=="+e);
      this.props.onSubmit(e)
    }
 }
   changeTitle(e){
    this.props.onChange(e)
  }
    render(){
       return <input type="text"  className="TodoInput" value={this.props.content} placeholder="请输入"
       onKeyPress={this.submit.bind(this)} 
       onChange={this.changeTitle.bind(this)}
       />
   }
 
}