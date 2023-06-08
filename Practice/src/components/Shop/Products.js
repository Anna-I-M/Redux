import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id:'p1',
    price: 10, 
    title: 'First book',
    description: 'The first book of the author'
  },
  {
    id:'p2',
    price: 15, 
    title: 'Second book',
    description: 'The test book of the author'
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product => (
        <ProductItem
          id={product.id}
          key={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />
        ))}
      </ul>
    </section>
  );
};

export default Products;
