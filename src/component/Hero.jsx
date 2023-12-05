import './index.css';

function Hero() {
    return (
        <div className="main">
            <div className="hero-left">
                <h1>YOUR FEET<br></br>DESERVE<br></br> THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="btn">
                <button>Shop Now</button>
                <button>Category</button>
                </div>
                <div className="shop">
                    <p>Also Available On</p>
                    <img src="/images/flipkart.png" alt="" />
                    <img src="/images/amazon.png" alt="" />
                </div>
            </div>
            <div className="hero-right">
                <img src="/images/shoe_image.png" alt="" />
            </div>
        </div>
    )
}
export default Hero