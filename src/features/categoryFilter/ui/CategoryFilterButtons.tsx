import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../../entities/product/model/categoriesSlice';
import { setCategory } from '../../../entities/product/model/allProductsSlice';
import { RootState, AppDispatch } from '../../../app/store';
import './CategoryFiltesButtons.scss'

export const CategoryFilterButtons: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const categories = useSelector((state: RootState) => state.categories.items);
  const selectedCategory = useSelector((state: RootState) => state.products.selectedCategory);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className='category-container'>
      <button onClick={() => dispatch(setCategory(null))} className={!selectedCategory ? 'active' : ''}>
        All
      </button>
      {categories.map((category: string) => (
        <button
          key={category}
          onClick={() => dispatch(setCategory(category))}
          className={selectedCategory === category ? 'active' : ''}
        >
          {category}
        </button>
      ))}
    </div>
  );
};