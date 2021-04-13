import emailjs from "emailjs-com";
import React from 'react';
import Head from 'next/head'
import swal from 'sweetalert';



const Email = () => {
  function sendEmail(e) {

     e.preventDefault();

      emailjs.sendForm('gmail', 'template_mc3bebs', e.target, 'user_9ljyXqXwVcOCizlpl265K')
        .then((result) => {
        console.log(result.text);
        },(error) => {
        console.log(error.text);
        });
        e.target.reset()
        swal("Great!", "Your email was sent!", "success");
 }


  return(
    <div>    
      <div>
      <Head>
      <title>Email Contact</title>
      </Head>
        <div className="container">
          <div className=" ">
            <h2> Let the Renter know you're interested! </h2>
            </div>
          
          <h4> Send an email below: </h4>
        <form onSubmit={sendEmail}>
                  <div className="col-8 form-group mx-auto">
                  <input type="text" className="form-control" placeholder="Name" name="name"/>
              </div>
                  <div className="col-8 form-group mx-auto">
                  <input type="email" className="form-control" placeholder="Email Address" name="email"/>
              </div>
              <div className="col-8 form-group mx-auto">
                  <input type="text" className="form-control" placeholder="Subject" name="subject"/>
              </div>
                  <div className="col-8 form-group mx-auto">
                  <textarea className="form-contol w-100 h-100" id="" cols="" rows="10" placeholder="Your message" name="message"/>
              </div>
                  <div className="col-8 form-group mx-auto">
                  <input type="submit" className="btn btn-info w-100" value="Send Email"></input>
              </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Email
