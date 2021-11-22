import React from "react";
import Fashioncollection from "./fashion-collection";
function Fashioncollectionpro() {
    const product=[
        {type: 'Best of the Year',title: 'BEST LAPTOP COLLECTION',img: 'http://core1.staticworld.net/images/article/2014/01/2008-macbook-air-100226942-gallery.jpg'},
        {type: 'Dont Miss Todays Featured Deals',title: 'BEST TV COLLECTION',img: 'https://t4.ftcdn.net/jpg/03/16/46/69/360_F_316466952_grymFkD5XVwF8DECqFlOYFc9HxGErCHN.jpg'},
        {type: 'Find Your new Favorite',title: 'BEST MOBILE COLLECTION',img: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'},
        
    ];
    const product2=[
        {type: 'Best of the Year',title: 'ZARA COLLECTION',img: 'https://cdn.shopify.com/s/files/1/0424/2394/3322/files/8_7600e2f9-c730-4079-9991-b2f1af19d7a2_670x.jpg?v=1596080858'},
        {type: 'Dont Miss Todays Featured Deals',title: 'BEST COLLECTION',img: 'https://cdn.shopify.com/s/files/1/0424/2394/3322/files/4_670x.jpg?v=1595685058'},
        {type: 'Find Your new Favorite',title: 'MUST-HAVES TREND',img: 'https://cdn.shopify.com/s/files/1/0424/2394/3322/files/9_4c58114d-7520-4c7e-8546-b47880097b41_670x.jpg?v=1596080826'},
        
    ];

   return(
  <>
  <div className="fashion-collection">
    <h2>BEST Fashion Collection</h2>
    <p>MOSTLY Collection </p>
    <div className="collection">

    {product2.map((product2)=><Fashioncollection type={product2.type} title={product2.title} img={product2.img} />)}
    </div>
  
  </div>
 
 <div className="fashion-collection">
    <h2>BEST Fashion Collection</h2>
    <p>MOSTLY Collection </p>
    <div className="collection">
    {product.map((product)=><Fashioncollection type={product.type} title={product.title} img={product.img} />)}

    </div>
  
  </div>
    
  </>
   );
    
}

export default Fashioncollectionpro;