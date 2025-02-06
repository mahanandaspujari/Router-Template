import Footer from "./Footer"
import Sale from "./Sale"


const Contact=()=>(
    <>
        <div className="contact-section">
            <p className="about-p">Let's Talk</p>
            <h1 className="about-head">CONTACT US</h1>
            <div className="contact d-md-flex gap-5">
                <div className="contact1">
                    <h1>Get in touch</h1>
                    <p>Have questions or need assistance? Click the 'Contact Us' icon to get in touch with our friendly and responsive customer support team</p>
                    <ul>
                        <li>Address</li>
                        2972 Westheimer Rd. Santa Ana, Illinois 85486
                        <hr />
                        <li>Phone</li>
                        (405) 555-0128
                        <hr />
                        <li>Email</li>
                        hello@example.com
                        <hr />
                    </ul>
                </div>
                <div className="contact2">
                    <div>
                        <label>First Name</label>
                        <input type="text" />
                    </div>
                    <br />
                    <div>
                        <label>Last Name</label><br />
                        <input type="text" />
                    </div>
                    <br />
                    <div>
                        <label>Email</label><br />
                        <input type="text" />
                    </div>
                    <br />
                    <div>
                        <label>Message</label><br />
                        <input type="text" />
                    </div>
                    <br />
                    <button className="btn1">SEND</button>
                </div>
            </div>
            <br /><br /><br />
        </div>
        <Sale/>

        <Footer />
    </>
)
export default Contact