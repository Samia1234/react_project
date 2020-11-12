import React, { Component } from 'react'
import './main.css'
import devloper from '../img/ABC.png'
export default class Main extends Component {
    render() {
        return (
            <>
               <div className="row mt-5">
                   <div className="col-10 mx-auto">
                       <div className="row">
                    <div className="col-lg-6 col-md-10  order-lg-1 order-sm-2 col-sm-10 col-xs-10 pt-5 pt-lg-0 order-2  col">
                        <h1 className="h1-main mt-5">Hi! I'am Samia </h1>
                        <h2 className="h2-main">Web Devloper</h2>
                        <p className="p-main ">Front End devloper with new technologies, react js and css frameworks</p>
                        <div className="row btn-row">
                            <div className="col-4">
                                  <h5>Email</h5>
                                  <p>Chasamya123@gmail.com</p>
                                  <button className="btn-normal btn-colored">Download cv</button>
                            </div>
                            <div className="col-4">
                                 <h5>Github</h5>
                                 <p>samia124.github.com</p>
                                 <button className="btn-normal btn-black">Hire me now</button>

                            </div>
                        </div>
                        </div>
                    <div className="col-lg-6 col-md-10 order-lg-2 order-sm-1 col-sm-10 col-xs-10 pt-5 pt-lg-0 order-2  col">
                        <img className="img-main animated" src={devloper}/>
                        </div>
                    </div>
                    </div>
                </div> 
            </>
        )
    }
}
