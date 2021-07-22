import React from 'react'
import './About.css'

export default function About() {
    return (

        <div className="about-section paddingTB60 gray-bg flex">
            <div className="container about">
                <div className="row">
                    <div className="col-md-7 col-sm-6">
                        <div className="about-title clearfix">
                            <h1>About <span>MercadoFree</span></h1>
                            <h3>Lorem ipsum dolor sit amet </h3>
                            <p className="about-paddingB">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet dolor libero, eget venenatis mauris finibus dictum. Vestibulum quis elit eget neque porttitor congue non sit amet dolor. Proin pretium purus a lorem ornare </p>
                            <p>sed lobortis pulvinar. Integer laoreet mi id eros porta euismod. Suspendisse potenti. Nulla eros mauris, convallis et sem tempus, viverra hendrerit sapien</p>
                            <div className="about-icons">






                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-6">
                        <div className="about-img">
                            <img src="https://devitems.com/preview/appmom/img/mobile/2.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

