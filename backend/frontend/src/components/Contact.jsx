import React from 'react'

export default function Contact() {
    return (
        <div>
            <div className="backgroundContact" >
                <div id="textBoxContact">
                    <div id="titleContact"><h3>Contact Us</h3></div> <br />
                    <span id="introContact">We are here to help you. Please fill out this form: </span><br />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your information with anyone else.</small>
                    <form className='formsContact'>
                        <div className="form-group" className="fullInput">
                            <label for="exampleInputEmail1">Full Name</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" />
                        </div>
                        <div class="form-group" className="emailInput">
                            <label for="exampleInputPassword1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputPassword1" placeholder="Enter email" />
                        </div>
                        <div class="form-group" className="messageInput">
                            <label for="exampleFormControlTextarea1">Message</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your message"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary" id="submitButtonContact">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
