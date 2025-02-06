import Footer from "./Footer"
import './CSS/style.css'
import Sale from "./Sale"

const Home=()=>(
    <>

        <div className="home-section">
            <div className="home text-center">
                <p>Hurry, Black Friday is Almost Here!</p>
                <h1 className="display-2 text-uppercase">Time Left Until Our Biggest Sale of the Year Begins</h1>
                <br />
                <button className="btn1" type="button">SET REMINDER</button>
            </div>
            <div className="home1 text-uppercase w-100">
                <div>
                    <h1>30</h1>
                    <p>Days</p>
                </div>
                <div>
                    <h1>22</h1>
                    <p>Hours</p>
                </div>
                <div>
                    <h1>08</h1>
                    <p>Minutes</p>
                </div>
                <div>
                    <h1>59</h1>
                    <p>Seconds</p>
                </div>
            </div>

            <div className="first">
                <img src="../Images/headphone-01.png" alt="" />
                <div>
                    <p style={{color:"#FC3746", fontFamily:"Kaushan Script, serif"}} className="fs-4">Up to 50% Off</p>
                    <h1 className="text-uppercase">Grab Your Favorites Before They're Gone</h1>
                    <p>You can trust us to bring you the latest technology at unbeatable prices. Don’t miss this limited-time opportunity to upgrade your audio game. Grab your perfect pair now!</p>
                    <button type="button" className="btn1">SHOP NOW</button>
                </div>
            </div><br />
        </div>

        <Sale/>
        <Footer />
    </>
)
export default Home