import Footer from "./Footer"
import Sale from "./Sale"

const About=()=>(
    <>
        <div className="about-section">
            <p className="about-p">A Few Words</p>
            <h1 className="about-head">ABOUT US</h1>
            <div className="div1">
            </div>
            <br />
            <div className="about-data d-md-flex gap-5">
                <div className="data1">
                    <p>Our Story</p>
                    <h1 className="text-uppercase">Our story is one of passion, perseverance, and commitment</h1>
                </div>
                <div className="data2">
                    <h2 className="text-uppercase">Our journey began when a group of dedicated individuals, fueled by a shared love for exceptional deals and unmatched savings, came together to create a shopping experience like no other</h2>
                    <br />
                    <p>Founded in 2008, BlackFridayShop set out with a simple mission – to make Black Friday accessible to everyone, delivering the thrill of unbeatable discounts to your fingertips. Over the years, we've dedicated ourselves to curating the finest selection of products, from electronics and fashion to home essentials and more, all with one goal in mind: providing you with the ultimate shopping experience.
                    What sets us apart is our relentless pursuit of quality and value. We've scoured the market for the finest products, establishing partnerships with trusted brands that share our commitment to excellence. This dedication ensures that every item you find at BlackFridayShop meets the highest standards of quality.</p>
                </div>
            </div>
            <hr />

        </div>
        <Sale/>

        <Footer />
    </>
)
export default About