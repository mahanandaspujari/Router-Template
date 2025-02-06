import { Link } from "react-router-dom"
import './CSS/style.css'

const Navigate=()=>{
    return(
        <>

<div className="head">
      <nav>
        <header className="container p-4 w-100">
          <section className="d-flex justify-content-between align-items-center">
            <span>
              <span><h3>BLACK<span className="logo">Friday</span></h3></span>
            </span>
            <span
              className="d-lg-none border border-1 border-secondary p-1"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvastop"
            >
              <i className="text-light bi bi-list h2"></i>
            </span>
            <ul className="mainmenu d-none d-lg-block d-lg-flex justify-content-around h-25 list-unstyled">
              <li>
              <Link to="/" className="text-light text-decoration-none fs-5">Home</Link>
              </li>
              <li>
              <Link to="/Shop" className="text-light text-decoration-none fs-5">Shop</Link>
              </li>
              <li>
              <Link to="/About" className="text-light text-decoration-none fs-5">About</Link>
              </li>
              <li>
              <Link to="/Contact" className="text-light text-decoration-none fs-5">Contact</Link>
              </li>
              
            </ul>
            <span className="d-none d-lg-block"><i class="bi bi-cart-check h2"></i></span>
          </section>
        </header>
      </nav>

      <div className="offcanvas offcanvas-top" id="offcanvastop">
        <div className="offcanvas-header">
          <button type="button" className="btn btn-close" data-bs-dismiss="offcanvas"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="list-unstyled">
            <li>
            <Link to="/" className="text-decoration-none text-light fs-5">Home</Link>
            </li>
            <hr />
            <li>
            <Link to="/" className="text-decoration-none text-light fs-5">Shop</Link>
            </li>
            <hr />
            <li>
            <Link to="/About" className="text-decoration-none text-light fs-5">About</Link>
            </li>
            <hr />
            <li>
            <Link to="/Contact" className="text-decoration-none text-light fs-5">Contact</Link>
            </li>
            <hr />
          </ul>
        </div>
      </div>
    </div>
        
        {/* <nav className="bg-info p-2">
            <ul>
                <li><Link to="/" className="text-light fs-4 text-decoration-none">Home</Link></li>
                <li><Link to="./About" className="text-light fs-4 text-decoration-none">About</Link></li>
                <li><Link to="./Contact" className="text-light fs-4 text-decoration-none">Contact</Link></li>
            </ul>
        </nav> */}

        </>
    )
}
export default Navigate