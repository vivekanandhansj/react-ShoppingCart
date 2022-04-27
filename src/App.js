import React,{useState} from "react"
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Cart from "./Cart";
import CartItem from "./CartItem";

function App() {

const [product,setProduct]= useState([
  {
    id: 1,
    title: "Fancy Product",
    rating: true,
    pric: "40-",
    price1: 80.00,
    sale: false,
    button:false,
    img: "https://picsum.photos/400/350",
  },{
    id: 2,
    title: "Special Item",
    rating: true,
    price: 20.00,
    price1: 18.00,
    sale: true,
    button:true,
    img: "https://picsum.photos/400/350",
  },{
    id: 3,
    title: "Sale Item",
    rating: true,
    price: 50.00,
    price1: 25.00,
    sale: true,
    button:true,
    img: "https://picsum.photos/400/350",
  },{
    id: 4,
    title: "Popular Item",
    rating: true,
    price1: 40.00,
    sale: false,
    button:true,
    img: "https://picsum.photos/400/350",
  },{
    id: 5,
    title: "Sale Item",
    rating: true,
    price: 50.00,
    price1: 25.00,
    sale: false,
    button:true,
    img: "https://picsum.photos/400/350",
  },{
    id: 6,
    title: "Fancy Product",
    rating: true,
    price: 120.00,
    price1: 280.00,
    sale: true,
    button:false,
    img: "https://picsum.photos/400/350",
  },{
    id: 7,
    title: "Special Item",
    rating: true,
    price: 20.00,
    price1: 18.00,
    sale: true,
    button:true,
    img: "https://picsum.photos/400/350",
  },{
    id: 8,
    title: "Popular Item",
    rating: true,
    price1: 40.00,
    sale: false,
    button:true,
    img: "https://picsum.photos/400/350",
  }
])
const [cartitems, setCartItems] = useState([]);
const [total, setTotal] = useState(0);

//function for adding items to cart
let handleCart = (item) => {
  setCartItems([...cartitems, item]);
  setTotal(total + item.price1);
};

//function for removing item from cart
let handleRemoveCart = (item) => {
  let itemIndex = cartitems.findIndex((obj) => item.id === obj.id);
  cartitems.splice(itemIndex, 1);
  setCartItems([...cartitems]);
  setTotal(total - item.price1);
};
 

  return (<>
    {/* navigation bar */}
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#start">
            <strong>Start Bootstrap</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active fw-6"
                  aria-current="page"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-muted" href="#about">
                  About
                </a>
              </li>
              <li>
                <div className="dropdown">
                  <button
                    className="btn btn-light dropdown-toggle text-muted"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Shop
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="#all">
                        All Products
                      </a>
                    </li>
                    <hr />
                    <li>
                      <a className="dropdown-item" href="#item">
                        Popular Items
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#new">
                        New Arrivals
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
       
              <div className="btn btn-outline-dark p-1" >
                <img
                  alt="_targer"
                  src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/30/000000/external-shopping-cart-cyber-monday-vitaliy-gorbachev-fill-vitaly-gorbachev.png"
                />
                <a href="https://icons8.com/icon/8AfUMPlae06y/shopping-cart">
                  {""}
                </a>{" "}
                Cart
                <span className="badge bg-dark rounded-pill ms-2">
                  {" "}
                  {cartitems.length}{" "}
                </span>
                <hr/>
                <ol className="list-group list-group-numbered">
                  {/* maping array data to cart component */}
                  {cartitems.map((item) => {
                    return (
                      <CartItem
                        item={item}
                        handleRemoveCart={handleRemoveCart}
                      />
                    );
                  })}
                </ol>
                {/* display total amount in cart */}
                {cartitems.length > 0 ? (
                  <div className="col-lg-12 text-center">
                    <h6>Total : {total}</h6>
                  </div>
                ) : (
                  <div className="col-lg-12 text-center">
                    <h6>No Items in Cart</h6>
                  </div>
                )}
              </div>
           
          </div>
        </div>
      </nav>
      <header class="bg-dark py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">Shop in style</h1>
                    <p class="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                </div>
            </div>
        </header>
        <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              {/* maping product arrai to cart component to display items detail */}
              {product.map((product) => {
                return (
                  <Cart key={product.id}
                    product={product}
                    cartItems={cartitems}
                    handleCart={handleCart}
                  />
                );
              })}
              </div>
              </div>
              </section>
         
              <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">Copyright © Your Website 2022</p></div>
        </footer>
    </div>
    </>
  );
}

export default App;
