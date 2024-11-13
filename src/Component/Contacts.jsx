import React from 'react'

const Contacts = () => {
  return <>

<section id="contact" className="contact section">

     
<div className="container section-title" >
  <h2>Contact</h2>
  <p><span>Need Help?</span> <span className="description-title">Contact Us</span></p>
</div>

<div className="container" >

  <div className="mb-5">
   
  </div>

  <div className="row gy-4">

    <div className="col-md-6">
      <div className="info-item d-flex align-items-center" >
        <i className="icon bi bi-geo-alt flex-shrink-0"></i>
        <div>
          <h3>Address</h3>
          <p>A108 Adam Street, New York, NY 535022</p>
        </div>
      </div>
    </div>

    <div className="col-md-6">
      <div className="info-item d-flex align-items-center"  >
        <i className="icon bi bi-telephone flex-shrink-0"></i>
        <div>
          <h3>Call Us</h3>
          <p>+1 5589 55488 55</p>
        </div>
      </div>
    </div>

    <div className="col-md-6">
      <div className="info-item d-flex align-items-center"  >
        <i className="icon bi bi-envelope flex-shrink-0"></i>
        <div>
          <h3>Email Us</h3>
          {/* <p>
            <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="ddb4b3bbb29db8a5bcb0adb1b8f3beb2b0">[email&#160;protected]</a></p> */}
        </div>
      </div>
    </div>

    <div className="col-md-6">
      <div className="info-item d-flex align-items-center"  >
        <i className="icon bi bi-clock flex-shrink-0"></i>
        <div>
          <h3>Opening Hours<br/></h3>
          <p><strong>Mon-Sat:</strong> 11AM - 23PM; <strong>Sunday:</strong> Closed</p>
        </div>
      </div>
    </div>

  </div>

  <form action="forms/contact.php" method="post" className="php-email-form"  >
    <div className="row gy-4">

      <div className="col-md-6">
        <input type="text" name="name" className="form-control" placeholder="Your Name" required=""/>
      </div>

      <div className="col-md-6 ">
        <input type="email" className="form-control" name="email" placeholder="Your Email" required=""/>
      </div>

      <div className="col-md-12">
        <input type="text" className="form-control" name="subject" placeholder="Subject" required=""/>
      </div>

      <div className="col-md-12">
        <textarea className="form-control" name="message" rows="6" placeholder="Message" required=""></textarea>
      </div>

      <div className="col-md-12 text-center">
        <div className="loading">Loading</div>
        <div className="error-message"></div>
        <div className="sent-message">Your message has been sent. Thank you!</div>

        <button type="submit">Send Message</button>
      </div>

    </div>
  </form>

</div>

</section>  
  </>
}

export default Contacts