import React, { Component } from 'react'
import skills from"../img/skiils.jpg"
import './about.css'
export class About extends Component {
    render() {
        return (
            <>
                 <div className="col-10 m-5 mx-auto">
                 
                     <div className="row d-flex justify-content-around">
                         <div className="col col-lg-5 col-sm-10">
                         <img className=" animated" src={skills} alt="skills"/>
                         </div>
                         <div className="col col-lg-5 col-sm-10 about-div" >
                             <h5 className="">About me</h5>
                             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.turies, but also the le, remaining essentially unchanged.</p>
                            <button type="submit" className="btn-normal btn-colored">Contact Me</button>
                         </div>
                     </div>
                 </div>
            </>
        )
    }
}

export default About
