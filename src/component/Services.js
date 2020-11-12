import React, { Component } from 'react'
import {AiOutlineCheck} from 'react-icons/ai'
import {IoIosArrowForward} from 'react-icons/io'
import './service.css'
export class Services extends Component {
    render() {
        return (
            <>
              <div className="col-10 div-1 mx-auto">
                  <div className="row d-flex justify-content-around my-5">
                      <div className=" div-col col  col-lg-3 col-md-10 col-sm-10  ">
                          <div className="row ">
                                  <div><AiOutlineCheck className="arrow"/></div>  
                              <div className="service-p"><h6>UI/UX Designer</h6>
                                   <p >Design website for you</p>
                                </div>
                              <div><IoIosArrowForward /></div>
                            </div>
                        </div>
                      <div className="div-col col col-lg-3 col-md-10 col-sm-10 p-5">
                      <div className="row">
                                <AiOutlineCheck className="arrow"/> 
                              <div className="service-p"><h6>UI/UX Designer</h6>
                                   <p>Design website for you</p>
                                </div>
                              <div><IoIosArrowForward /></div>
                            </div>
                      </div>
                      <div className="div-col col col-lg-3 col-md-10 col-sm-10 p-5">
                      <div className="row">
                                  <div><AiOutlineCheck className="arrow"/></div>  
                              <div><h6>UI/UX Designer</h6>
                                   <p>Design website for you</p>
                                </div>
                              <div><IoIosArrowForward /></div>
                            </div>
                      </div>
                  </div>
                </div>  
            </>
        )
    }
}

export default Services
