import "./Show.css";
import { useParams } from "react-router";


function Show({ products }) {

  const { id } = useParams();
  const product = products.find((product) => product._id === id);
  // const navigate = useNavigate();


  return (
    <div className="allproducts">
      <div className="container">

        <div className="left">
          <img className="product-img" src={product.img} alt={product.Title} />
        </div>

        <div className="center">
          <h1 className="product-title">{product.Title}</h1>
         

          <p className="product-price">Price: ${product.Price}</p>

          <div className="paragraph-two">
          <strong className="about-item">About this item: </strong> 
          <p className="product-desc">{product.desc}</p>
        </div>
        </div>

        <div className="right">
          <h1>Buy now</h1>
          <button>Add to cart</button>
        </div>
      </div>
   



  )
};


export default Show;