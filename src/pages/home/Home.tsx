import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../entities/product/model/allProductsSlice';
import { ProductCard } from '../../entities/product/ui/ProductCard';
import { RootState, AppDispatch } from '../../app/store';
import { IProduct } from '../../entities/product/ui/ProductCard';
import { Loader } from '../../shared/ui/Loader/Loader';
import { CategoryFilter } from '../../widgets/categoryFilter/CategoryFilter';


export const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, status, selectedCategory } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredItems = selectedCategory
    ? items.filter((product: IProduct) => product.category === selectedCategory)
    : items;

  return (
    <div className="container">
      <CategoryFilter />
      <div className='cards-container'>
        {status === 'loading' && <Loader />}
        {status === 'succeeded' &&
          filteredItems.map((product: IProduct) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>

    </div>
  );
};