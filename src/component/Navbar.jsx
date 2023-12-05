import './index.css';

function Navbar(){
    return(
        <div>
            <nav>
                <div className="logo">
                    <img src="./public/images/brand_logo.png" alt="" />
                </div>
                <ul>
                    <li>HOME</li>
                    <li>LOCATION</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                </ul>
                <button>Login</button>
            </nav>
        </div>
    )
}


export default Navbar