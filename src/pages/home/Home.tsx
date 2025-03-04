import { ProductList } from '../../entities/product/ui/ProductList';
import { CategoryFilterButtons } from '../../features/categoryFilter/ui/CategoryFilterButtons';


export const Home = () => {
  return (
    <div className="container">
      <CategoryFilterButtons />
      <ProductList/>
    </div>
  );
};