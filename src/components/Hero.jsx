const Hero = () =>{
    return (
        <div className="hero container">
            <div className="hero-content">
                <h1>For Those Who Respect the Boogeyman.
                    </h1>
                    <p>Unlock premium John Wick–inspired gear crafted for precision, style, and absolute focus.
Suit up. Stand out. Become a legend.</p>
                    <div className="hero-btn">
                        <button>Shop Now</button>
                        <button className="Secondry-btn">Category</button>
                    </div>
                    <div className="shopping">
                        <p>Also available on</p>
                        <div className="shopping-icons">
                            <img src="public\images\flipkart.png" alt="flipkart" />
                            <img src="public\images\amazon.png" alt="amazon" />
                        </div>
                    </div>
            </div>
            <div className="hero-image">
                <img src="public\images\john-wick.png" alt="" className="john-wick"/>
            </div>
            
        </div>
    );
}

export default Hero