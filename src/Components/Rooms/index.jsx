import React, { Component } from 'react'
import { faBed,faPlusCircle,faMinusCircle,faUser,faChild,faUsers } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./index.css"
export class index extends Component {
    constructor(){
        super();
        this.state={
            rooms:1,
            adults:0,
            children:0
        }
    }
    handleRoomplusClick = ()=>{
        if(this.state.rooms<=4){
            this.setState({
                rooms:this.state.rooms+1,
            })
        }
    }
    handleRoomminusClick = ()=>{
        if(this.state.rooms>=2){
            this.setState({
                rooms:this.state.rooms-1,
            })
        }
         }
    handleAdultplusClick = ()=>{
        if(this.state.adults<=20){
         
            this.setState({
                adults:this.state.adults+1,
            })
        }
       
    }
    handleAdultminusClick = ()=>{
        if(this.state.adults>=1){
            this.setState({
                adults:this.state.adults-1,
            })
        }
    }
    handleChildplusClick = ()=>{
        if(this.state.adults>=1){
             if(this.state.children<=3){
                this.setState({
                    children:this.state.children+1,
                })
            }
        }
    }
    handleChildminusClick = ()=>{
        if(this.state.children>=1){
            this.setState({
                children:this.state.children-1,
            })
        }
    }

    render() {
        return (
 <div className="items  ">
      <span className=" text"><FontAwesomeIcon icon={faUsers} /><span className="px-2">Choose No Of People</span></span>
      <div className="border border-dark wd">
    <div className=" borders  ">   
    <div className="mt-3">           
       <span className=" text"><FontAwesomeIcon icon={faBed} /><span className="px-2">ROOMS</span></span>
       <span className="px-2 marginroom text " onClick={this.handleRoomminusClick}><FontAwesomeIcon icon={faMinusCircle}/></span>
       {this.state.rooms}
       <span className="text-danger px-2" onClick={this.handleRoomplusClick}><FontAwesomeIcon icon={faPlusCircle}/></span>
    </div>
    </div>

    <div className=" borders">
    <div className="mt-3">      
       <span className=" text"><FontAwesomeIcon icon={faUser} /><span className="px-3">ADULTS</span></span>
       <span className="px-2 marginadult text" onClick={ this.handleAdultminusClick}><FontAwesomeIcon icon={faMinusCircle}/></span>
       {this.state.adults}
       <span className="text-danger px-2" onClick={this.handleAdultplusClick}><FontAwesomeIcon icon={faPlusCircle}/></span>
    </div>
    </div>
    <div className=" borders" >
    <div className="mt-3"  disabled>      
       <span className="text"><FontAwesomeIcon icon={faChild} /><span className="px-3">CHILDREN</span></span>
       <span className="px-2 marginchild text"  onClick={this.handleChildminusClick}><FontAwesomeIcon icon={faMinusCircle}/></span>
       {this.state.children}
       <span className="text-danger px-2"  onClick={this.handleChildplusClick}><FontAwesomeIcon icon={faPlusCircle}/></span>
    </div>
    </div>
    </div>
</div>

            
        )
    }
}

export default index
