import React from 'react'
import logo from '../img/logo.png'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter,AiFillLinkedin,AiFillInstagram} from "react-icons/ai"
import {BsSearch} from "react-icons/bs"

export default function Navbar() {
    return (
        <>
           <nav class="navbar navbar-expand-lg ">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon text-black"></span>
  </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav bordr-l ">
                         <li className="nav-item nav-item active"><a  className="menu_active" href="">Home</a></li>
                         <li className="nav-item"><a  className="" href="">Services</a></li>
                         <li className="nav-item"><a  className="" href="">About</a></li>

                         <li className="nav-item"><a  className="" href="">Skills</a></li>
                         <li className="nav-item"><a  className="" href="">Contact</a></li>

                        </ul>
                        <div className="ml-auto icons-div">
                            <ul className="navbar-nav mx-0 px-0">
                                   <li className="nav-item icon-item"><a  className="nav-link" href=""><FaFacebookF/></a></li>
                                   <li className="nav-item icon-item"><a  className="nav-link" href=""><AiOutlineTwitter/></a></li>
                                    <li className="nav-item icon-item"><a  className="nav-link" href=""><AiFillLinkedin/></a></li>
                                    <li className="nav-item icon-item"><a  className="nav-link" href=""><AiFillInstagram/></a></li>

                            </ul>
                            
                        </div>
                        <div className="search-div">
                        <form class="form-inline my-2 my-lg-0">
                            <BsSearch/>
                           <button  className="contact-me " type="submit">contact me</button>
                            </form>
                        </div>
                    </div>

</nav> 
        </>
    )
}
