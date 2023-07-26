import { Text } from "../components/Text/text";
import { CarButton, CarCompany, CarContent, CarKm, CarPower, CarShield, CarYear} from "./CardCars.styles"

interface IPostCard {
    company: string;
    year: string;
    km: string;
    power: string;
    shield: string;
}
export const CardCars = ({ company, km, power, shield, year}: IPostCard) => {
  return (
        <CarContent>
            
            <CarCompany>
                <Text color="preto" size="24" weight={400}>
                    {company}
                </Text>
            </CarCompany>
            
            <CarYear>
                <Text color="preto" size="16" weight={400}>
                    {year}
                </Text>
            </CarYear>

            <CarKm>
                <Text color="preto" size="16" weight={400}>
                    {km}
                </Text>
            </CarKm>

            <CarPower>
                <Text color="preto" size="16" weight={400}>
                    {power}
                </Text>
            </CarPower>

            <CarShield>
                <Text color="preto" size="16" weight={400}>
                    {shield}
                </Text>
            </CarShield>

            <CarButton>
                <button>
                    Ver carro
                </button>
            </CarButton>

        </CarContent>
  )
}
