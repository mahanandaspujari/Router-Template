import Footer from "./Footer"
import './CSS/style.css'

const Shop=()=>(
    <>
        <div  className="shop-section">
        <h1 className="text-center shop-h">SHOP</h1><br /><br />
        <div className="shop">
            <div className="row">
                <div className="col-6 col-md-4 col-lg-3 shop1">
                    <img src="../Images/15-product-400x463.jpg" alt="" />
                    <h6>AeroSync Elite Laptops</h6>
                    <span className="text-decoration-line-through">$600.00</span><span>$475.00</span>
                </div>
                <div className="col-6 col-md-4 col-lg-3 shop2">
                    <img src="../Images/6-product-400x463.jpg" alt="" />
                    <h6>AeroSync Elite Laptops</h6>
                    <span className="text-decoration-line-through">$600.00</span><span>$475.00</span>
                </div>
                <div className="col-6 col-md-4 col-lg-3 shop3 mt-5 mt-md-0">
                    <img src="../Images/1-product-400x463.jpg" alt="" />
                    <h6>AeroSync Elite Laptops</h6>
                    <span className="text-decoration-line-through">$600.00</span><span>$475.00</span>
                </div>
                <div className="col-6 col-md-4 col-lg-3 shop4 mt-5 mt-lg-0">
                    <img src="../Images/7-product-400x463.jpg" alt="" />
                    <h6>AeroSync Elite Laptops</h6>
                    <span className="text-decoration-line-through">$600.00</span><span>$475.00</span>
                </div>

                <div className="col-6 col-md-4 col-lg-3 shop1 mt-5">
                    <img src="../Images/12-product-400x463.jpg" alt="" />
                    <h6>AeroSync Elite Laptops</h6>
                    <span className="text-decoration-line-through">$600.00</span><span>$475.00</span>
                </div>
                <div className="col-6 col-md-4 col-lg-3 shop2 mt-5">
                    <img src="../Images/3-product-400x463.jpg" alt="" />
                    <h6>AeroSync Elite Laptops</h6>
                    <span className="text-decoration-line-through">$600.00</span><span>$475.00</span>
                </div>
                <div className="col-6 col-md-4 col-lg-3 shop3 mt-5">
                    <img src="../Images/2-product-400x463.jpg" alt="" />
                    <h6>AeroSync Elite Laptops</h6>
                    <span className="text-decoration-line-through">$600.00</span><span>$475.00</span>
                </div>
                <div className="col-6 col-md-4 col-lg-3 shop4 mt-5">
                    <img src="../Images/8-product-400x463.jpg" alt="" />
                    <h6>AeroSync Elite Laptops</h6>
                    <span className="text-decoration-line-through">$600.00</span><span>$475.00</span>
                </div>
            </div>
        </div>
        </div>
        
        <Footer />
    </>
)
export default Shop