import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { arrived } from '../data/Arrived';
import ProductCard from './ProductCard';

function ProductsCatTabs() {
  return (
    <Tabs
      defaultActiveKey="All"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="All" title="ALL">
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"10px",flexWrap:"wrap"}}>
      {arrived.map((item) => (
            <ProductCard item={item} key={item.id}/>
          ))}
      </div>
      </Tab>
      <Tab eventKey="Bats" title="Bats">
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"10px",flexWrap:"wrap"}}>
      {arrived.map((item) => (
            <ProductCard item={item} key={item.id}/>
          ))}
      </div>
      </Tab>
      <Tab eventKey="Padds" title="Padds">
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"10px",flexWrap:"wrap"}}>
      {arrived.map((item) => (
            <ProductCard item={item} key={item.id}/>
          ))}
      </div>
      </Tab>
      <Tab eventKey="helmet" title="Helmet">
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"10px",flexWrap:"wrap"}}>
      {arrived.map((item) => (
            <ProductCard item={item} key={item.id}/>
          ))}
      </div>
      </Tab>
      <Tab eventKey="kitbag" title="Kitbag">
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"10px",flexWrap:"wrap"}}>
      {arrived.map((item) => (
            <ProductCard item={item} key={item.id}/>
          ))}
      </div>
      </Tab>
    </Tabs>
  );
}

export default ProductsCatTabs;