import { Text } from '../components/Text/text'
import { BlurContent, Container, Description, SeeOtherCars, Title } from './SectionBlur.styles'

export const SectionBlur = () => {
  return (
    <Container>
        <BlurContent>
            <Title>
                <Text color='branco' size='42' weight={400}>
                    Mustang
                </Text>
            </Title>

            <Description>
                <Text color='branco' size='18' weight={400}>
                O Ford Mustang é um automóvel desportivo produzido pela <br />
                Ford Motor Company. O carro foi apresentado ao público em <br />
                17 de abril de 1964 durante a New York World's Fair. O <br />
                Mustang, apesar de ter sofrido grandes alterações ao longo <br />
                dos anos é a mais antiga linha de automóveis da Ford.
                </Text>
            </Description>

            <SeeOtherCars>
                <button>Ver carros</button>
            </SeeOtherCars>
        </BlurContent>
    </Container>
  )
}
