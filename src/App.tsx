import { BrowserRouter } from 'react-router-dom'

import { Header } from './components/Header'
import { Product } from './components/Product'
import { GlobalStyle } from './styles'
import ProductList from './components/ProductList'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <ProductList />
      <Footer />
    </BrowserRouter>
  )
}

export default App
