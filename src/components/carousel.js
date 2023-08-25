import React from 'react'
import IMG1 from '../bg.webp';
import IMG2 from '../hehe.png';
import './carousel.css';
function carousel() {
    return (
        <>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={IMG1} alt="bg" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={IMG2} alt="bg" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default carousel;
