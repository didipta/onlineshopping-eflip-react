import React from "react";
import Bestselles from "./best_selles";
function Bestsellepros() {

    const product=[
        {id: 'ATH-ANC700BT', name: 'Headphone',price:'৳-4,000',img: 'img/Image 28.png'},
        {id: 'Dell G7 15-7590', name: 'Gaming Laptop',price:'৳-1,88,000',img: 'img/Image 29.png'},
        {id: 'Samsung  RS74R5101SL', name: 'Refrigerator',price:'৳-1,99,900',img: 'img/Image 30.png'},
        {id: 'iphone 12 pro max', name: 'Smart Phone',price:'৳1,61,999',img: 'img/Image 31.png'},
        {id: 'Rolex-116503WDO', name: 'Mans Watch',price:'৳14,056,182',img: 'img/Image 32.png'},
        {id: 'TCL 50P615', name: 'Android Tv',price:'৳140,182',img: 'img/Image 33.png'},
        {id: 'Triumph Rocket III', name: 'Motorcycle',price:'৳-314,000',img: 'img/Image 34.jpg'},
    ];
    const product2=[
        {id: 'ATH-ANC700BT', name: 'Headphone',price:'৳-4,000',img: 'https://i.insider.com/5e6bfc7984159f1ef67edf42?width=750&format=jpeg&auto=webp'},
        {id: 'Dell G7 15-7590', name: 'Gaming Laptop',price:'৳-1,88,000',img: 'https://specials-images.forbesimg.com/imageserve/5dd70e212c886a0007ecbd41/best-gaming-laptops-black-friday/960x0.jpg?cropX1=0&cropX2=960&cropY1=39&cropY2=679'},
        {id: 'Samsung  RS74R5101SL', name: 'Refrigerator',price:'৳-1,99,900',img: 'img/Image 30.png'},
        {id: 'iphone 12 pro max', name: 'Smart Phone',price:'৳1,61,999',img: 'https://cms.qz.com/wp-content/uploads/2019/09/Apple-iPhone-11-Pro-Max-review-colors.jpg?quality=75&strip=all&w=1600&h=900&crop=1'},
        {id: 'Rolex-116503WDO', name: 'Mans Watch',price:'৳14,056,182',img: 'https://www.wallpapertip.com/wmimgs/249-2499165_rolex-men-watches-branded.jpg'},
        {id: 'TCL 50P615', name: 'Android Tv',price:'৳140,182',img: 'https://st.depositphotos.com/1000128/5100/i/600/depositphotos_51000613-stock-photo-smart-tv.jpg'},
        {id: 'Triumph Rocket III', name: 'Motorcycle',price:'৳-314,000',img: 'https://bazzaz.net/wp-content/uploads/images/products/products-1098sp_2008.jpg'},
    ];
   return(
  <>
  
  <div className="best_selles">
    <h2>BEST SELLERS</h2>
    <p>MOSTLY  BOUGHT</p>
    <div className="iteam-slider">

  {product.map((product)=><Bestselles id={product.id} name={product.name} price={product.price} img={product.img} />)}

    </div>
    </div>

    <div className="best_selles">
    <h2>BEST SELLERS</h2>
    <p>MOSTLY  BOUGHT</p>
    <div className="iteam-slider">

  {product.map((product)=><Bestselles id={product.id} name={product.name} price={product.price} img={product.img} />)}

    </div>
    </div>

    <div className="best_selles">
    <h2>BEST SELLERS</h2>
    <p>MOSTLY  BOUGHT</p>
    <div className="iteam-slider">

  {product2.map((product2)=><Bestselles id={product2.id} name={product2.name} price={product2.price} img={product2.img} />)}

    </div>
    </div>
    </>
   );
    
}

export default Bestsellepros;