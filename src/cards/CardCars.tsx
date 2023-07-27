import { Calendar, Gauge, Lightning, Users } from "@phosphor-icons/react";
import { Text } from "../components/Text/text";
import { CarButton, CarCompany, CarContent, CarImage, CarKm, CarPower, CarShield, CarYear, StatsCar} from "./CardCars.styles"

interface IPostCard {
    carImage: {
        url: string;
        alt: string;
    },
    company: string;
    year: string;
    km: string;
    power: string;
    shield: string;
}
export const CardCars = ({ company, km, power, shield, year, carImage}: IPostCard) => {
  return (
        <CarContent>
            <CarImage>
                <img src={carImage.url} alt={carImage.alt} />
            </CarImage>
            <CarCompany>
                <Text color="preto" size="24" weight={400}>
                    {company}
                </Text>
            </CarCompany>

            <StatsCar>
            
            <CarYear>
                <Calendar size={22} />
                <Text color="preto" size="16" weight={400}>
                    {year}
                </Text>
            </CarYear>

            <CarKm>
                <Gauge size={22} />
                <Text color="preto" size="16" weight={400}>
                    {km}
                </Text>
            </CarKm>

            <CarPower>
                <Lightning size={22} />
                <Text color="preto" size="16" weight={400}>
                    {power}
                </Text>
            </CarPower>

            <CarShield>
                <Users size={22} />
                <Text color="preto" size="16" weight={400}>
                    {shield}
                </Text>
            </CarShield>

            </StatsCar>

            <CarButton>
                <button>
                    Ver carro
                </button>
            </CarButton>

        </CarContent>
  )
}
