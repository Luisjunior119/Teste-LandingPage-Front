import { CarMap } from '../cards/CarMap'
import { Header } from '../components/Header/Header'
import { Container } from './Home.styles'

export const Home = () => {
  return (
    <Container>
      <Header />
      <CarMap/>

    </Container>
  )
}
