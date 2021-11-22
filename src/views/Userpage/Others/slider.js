import React from "react";
import hotdeal from '../../../img/Image 26.jpg';
import bkash from '../../../img/Image 25.jpg';
import bkash1 from '../../../img/bkash.svg';
import slider10 from '../../../img/slider-10.jpeg';
function Slider() {
   return(
       <>
  <div className="img-slider">
        <div className="slider active">
            <img src="https://images.hdqwalls.com/wallpapers/bike-black-and-white-pic.jpg" alt=""/>
            <div className="info">
                <h2></h2>
                <p></p>
            </div>

        </div>
        <div className="slider">
            <img src={slider10} alt=""/>
            <div className="info">
                <h2></h2>
                <p></p>
            </div>

        </div>

        <div className="slider">
            <img src="https://i.pinimg.com/originals/f7/22/ea/f722eabe02a33184b7e57db807d1edda.jpg" alt=""/>
            <div className="info">
                <h2></h2>
                <p></p>
            </div>

        </div>

        <div className="slider">
            <img src={require("../../../img/slider-8..jpeg").default} alt=""/>
            <div className="info">
                <h2></h2>
                <p></p>
            </div>

        </div>
        <div className="nav">
            <div className="btn active"></div>
            <div className="btn"></div>
            <div className="btn"></div>
            <div className="btn"></div>
        </div>  
    </div>
    <div class="offer">
            <div class="b-kash">
                <img src={bkash} alt=""/>

                <div class="offer-info">
                  <img src={bkash1} alt=""/>
                  <p>PAY WITH bkash & GET ADDITIONAL</p>
                  <h3>10% INSTANT CASHBACK</h3>
                </div>
                
            </div>
            <div class="hot-del">
              <img src={hotdeal} alt=""/>
              <div class="offer-info">
                <h4>HOT DEALS</h4>
                <p>IF YOU BUY A PRODUCT YOU CAN OFFERS.</p>
                <h3>UP TO 50% OFF!!</h3>
              </div>
                
            </div>
            </div>
            
    </>
 

   );

   
    
}
export default Slider;