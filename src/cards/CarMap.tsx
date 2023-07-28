import { data } from './dataCar'
import { CardCars } from './CardCars'
import { Container } from './CarMap.styles'

export const CarMap = () => {
  return (
    <Container>
        {data.map((item, idx) => {
        return(
            <CardCars
            key={`key_${idx}`}
            carImage={item.carImage}
            company={item.company}
            year={item.year}
            km={item.km}
            power={item.power}
            shield={item.shield}
            />
        )
        })}
    </Container>
  )
}
