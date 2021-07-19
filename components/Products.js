import FlipMove from 'react-flip-move';
import ProductCard from './ProductCard';

const Products = () => {
  return (
    <FlipMove className='w-full xl:w-[1200px] grid items-center grid-cols-2 md:grid-cols-3 xl:flex justify-center flex-wrap gap-8 place-items-center my-4 sm:my-12'>
      {[0, 1, 2, 3, 5].map((product, key) => (
        <div key={key}>
          <ProductCard key={key} />
        </div>
      ))}
    </FlipMove>
  );
};

export default Products;
