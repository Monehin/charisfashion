import FlipMove from 'react-flip-move';
import ProductCard from './ProductCard';

const Products = ({ products }) => {
  return (
    <FlipMove className='w-full xl:w-[1200px] grid items-center grid-cols-2 md:grid-cols-3 xl:flex justify-center flex-wrap gap-8 place-items-center my-4 sm:my-12'>
      {products.length ? (
        products.map((product, key) => (
          <div key={key}>
            <ProductCard key={key} product={product} />
          </div>
        ))
      ) : (
        <h1 className='text-2xl uppercase animate-bounce my-20'>
          New Designs Coming Soon!!!
        </h1>
      )}
    </FlipMove>
  );
};

export default Products;
