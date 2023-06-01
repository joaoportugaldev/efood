import Header from '../../components/Header'
import List from '../../components/List'
import Footer from '../../components/Footer'
import { Loader } from '../../components/Loader'

import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery()

  return (
    <>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <List defaultList={true} restaurants={restaurants} />
      )}
      <Footer />
    </>
  )
}

export default Home
