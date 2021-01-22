import React, { Component } from 'react'
import { faBed, faPlusCircle, faMinusCircle, faUser, faChild, faUsers } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./index.css"
export class index extends Component {
              state = {
                      rooms: 1,
                      adults: 0,
                      children: 0
              }
      handleRoomplusClick = () => {
              if (this.state.rooms <5) {
                      this.setState({
                              rooms: this.state.rooms + 1,
                      })
              }
      }
      handleRoomminusClick = () => {
              if (this.state.rooms > 0) {
                      this.setState({
                              rooms: this.state.rooms - 1,
                      })
              }
      }
      handleAdultplusClick = () => {
              this.handleCheck();
              if(this.state.rooms>0){
                      if (this.state.adults < 20) {
                              this.setState({
                              adults: this.state.adults + 1,
                              })
                      }
              }
      }
      handleAdultminusClick = () => {
              this.handleCheck();
              if (this.state.adults >= 1) {
                      this.setState({
                              adults: this.state.adults - 1,
                      })
              }
      }
      handleChildplusClick = () => {
              this.handleCheck();
              if (this.state.adults > 0) {
                      if (this.state.children < 15) { 
                              this.setState({
                                      children: this.state.children + 1,
                              })
                      }
                      if(this.state.children>3){
                              this.setState({
                                      adults:2,
                              })
                      }
                      if(this.state.children>6){
                              this.setState({
                                      adults:3,
                              })
                      }
                      if(this.state.children>9){
                              this.setState({
                                      adults:4,
                              })
                      }
                              if(this.state.children>12){
                                      this.setState({
                                              adults:5,
                                      })
                              }
                      
              }
      }
      handleChildminusClick = () => {
              this.handleCheck();
              if (this.state.children >= 1) {
                      this.setState({
                              children: this.state.children - 1,
                      })
              }
      }
      handleCheck =()=>{
                      let countofpeople = this.state.adults+this.state.children;
                          console.log(countofpeople);
                          if(countofpeople<=3){
                              this.setState({
                                      rooms:1
                              })
                      }
                      if(countofpeople>3 &&countofpeople<=7){
                              this.setState({
                                      rooms:2
                              })
                      }
                      if(countofpeople>7 &&countofpeople<=11){
                                      this.setState({
                                              rooms:3
                                      })
                              }
                                      if(countofpeople>11 &&countofpeople<=15){
                                              this.setState({
                                                      rooms:4
                                              })
                                      }
                                              if(countofpeople>15 &&countofpeople<=19){
                                                      this.setState({
                                                              rooms:5
                                                      })
                      }

                
              }
      render() {
              return (
                      <div className="items   ">
                              <span className=" text"><FontAwesomeIcon icon={faUsers} /><span className="px-2">Choose No Of People</span></span>
                              <div className="border border-dark wd">
                                      <div className=" borders   ">
                                              <div className="mt-3">
                                                      <span className=" text"><FontAwesomeIcon icon={faBed} /><span className="px-2">ROOMS</span></span>
                                                      <span className="px-2 marginroom text " onClick={this.handleRoomminusClick}><FontAwesomeIcon icon={faMinusCircle} /></span>
                                                      {this.state.rooms}
                                                      <span className="text-danger px-2" onClick={this.handleRoomplusClick}><FontAwesomeIcon icon={faPlusCircle} /></span>
                                              </div>
                                      </div>

                                      <div className=" borders">
                                              <div className="mt-3">
                                                      <span className=" text"><FontAwesomeIcon icon={faUser} /><span className="px-3">ADULTS</span></span>
                                                      <span className="px-2 marginadult text" onClick={this.handleAdultminusClick}><FontAwesomeIcon icon={faMinusCircle} /></span>
                                                      {this.state.adults}
                                                      <span className="text-danger px-2" onClick={this.handleAdultplusClick}><FontAwesomeIcon icon={faPlusCircle} /></span>
                                              </div>
                                      </div>
                                      <div className=" borders" >
                                              <div className="mt-3" disabled>
                                                      <span className="text"><FontAwesomeIcon icon={faChild} /><span className="px-3">CHILDREN</span></span>
                                                      <span className="px-2 marginchild text" onClick={this.handleChildminusClick}><FontAwesomeIcon icon={faMinusCircle} /></span>
                                                      {this.state.children}
                                                      <span className="text-danger px-2" onClick={this.handleChildplusClick}><FontAwesomeIcon icon={faPlusCircle} /></span>
                                              </div>
                                      </div>
                              </div>
                      </div>


              )
      }
}

export default index