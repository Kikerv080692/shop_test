import ProductItem from './ProductItem'
import {useContext} from "react";
import {AppContext} from "@/context/AppContext.jsx";
import Button from "@/ui/Button/Button.jsx";


const ProductList = ({ products }) => {
  const {toggleProducts, setToggleProducts} = useContext(AppContext)
  let toggleClass = toggleProducts ? 'products__table' : 'products__list'
  return (
      <>
        <div>
          <Button className="toggle__btn" handlerClick={() => setToggleProducts(prev => !prev)}>Toggle</Button>
          {/*<Button handlerClick={() => setToggleProducts(false)}>Row</Button>*/}
          {/*<Button handlerClick={() => setToggleProducts(true)}>Table</Button>*/}
        </div>
        <div className={toggleClass}>
          {products?.map(product => <ProductItem key={product.id} product={product}/>)}
        </div>
      </>
  )
}

export default ProductList
