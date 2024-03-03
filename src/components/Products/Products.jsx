import { useEffect } from 'react'

import './ProductList.scss'
import Loading from '@/ui/Loading/Loading.jsx'
import Button from '@/ui/Button/Button.jsx'

import ProductList from './ProductList.jsx'
import {useDispatch, useSelector} from "react-redux";
import {fetchGetAllProducts} from "@/store/slices/productsSlice.js";

const Products = () => {
    const { products, loading } = useSelector(state => state.products)
    const dispatch = useDispatch()
    console.log(products)

    useEffect(() => {
       dispatch(fetchGetAllProducts())
    }, [dispatch]);

  if (loading) {
    return <Loading />
  }

  return (
    <section className='products'>
      <header className='products__header'>
        <h1>Продукти</h1>
        <h2>Кількість: {products.length}</h2>
      </header>

      <ProductList products={products} />

      <Button className='btn-see-more' disabled={products.length}>
        Дивитись інші товари
      </Button>
    </section>
  )
}

export default Products
