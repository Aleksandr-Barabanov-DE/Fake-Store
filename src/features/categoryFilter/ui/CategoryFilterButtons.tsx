import { FC, useEffect, useRef, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '@/entities/product/model/categoriesSlice';
import { setCategory } from '@/entities/product/model/allProductsSlice';
import { RootState, AppDispatch } from '@/app/store';
import './CategoryFiltesButtons.scss';
import gsap from 'gsap';

export const CategoryFilterButtons: FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch<AppDispatch>();
  const categories = useSelector((state: RootState) => state.categories.items);
  const selectedCategory = useSelector((state: RootState) => state.products.selectedCategory);

  useLayoutEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0,  duration: 1.5,
          ease: "power2.out",
          delay: 0.8,}
      );
    }
  }, []);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div ref={sectionRef} className='category-container'>
      <button
        onClick={() => dispatch(setCategory(null))}
        className={!selectedCategory ? 'active' : ''}
      >
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