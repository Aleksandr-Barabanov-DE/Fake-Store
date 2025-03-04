import { Loader } from '../../../shared/ui/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, selectFilteredProducts } from '../../../entities/product/model/allProductsSlice';
import { RootState, AppDispatch } from '../../../app/store';
import { ProductCard } from '../../../entities/product/ui/ProductCard';



export const ProductList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const status = useSelector((state: RootState) => state.products.status);
  const filteredItems = useSelector(selectFilteredProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  
  return (
    <div className='cards-container'>
    {status === 'loading' && <Loader />}
    {status === 'succeeded' &&
      filteredItems.map((product) => <ProductCard key={product.id} product={product} />)}
  </div>
  
  )

}
