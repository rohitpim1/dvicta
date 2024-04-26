
import { Link } from 'react-router-dom';
import hero1 from '../assests/hero1.jpg';
function ComboCard({item}) {
  return (
    <div className='comboCard'>
        <div className='image'>
            <img src={hero1} alt=''/>
        </div>
        <div className='text'>
            <h3>{item.name}</h3>
            <p>
            {item.description}
            </p>
            <p>{item.dPrice} &nbsp;&nbsp;&nbsp; <span style={{textDecoration:"line-through"}}>{item.price}</span></p>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>Buy Now</Link>
        </div>
    </div>
  );
}

export default ComboCard;