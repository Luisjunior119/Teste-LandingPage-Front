import styled from "styled-components";
import { theme } from "../global/theme";


export const CarContent = styled.div`
    width: 242px;
    height: 362px;

    border: 1px solid #000000;
    border-radius: 24px;

    margin-top: 60px;
`;

export const CarImage = styled.div`

    img{
        position: absolute;
    transform: translateY(-55%);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    width: 180px;
    height: 130px;
    margin: 0 24px;
    }
`;

export const CarCompany = styled.div`
    justify-content: center;
    display: flex;
    margin-top: 42px;
`;

export const StatsCar = styled.div`
    padding: 32px 24px;
`;

export const CarYear = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

export const CarKm = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 20px;
`;

export const CarPower = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 20px;
`;

export const CarShield = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 20px;
`;

export const CarButton = styled.div`

    display: flex;
    justify-content: center;
    margin-top: 6px;

    button {

        width: 217px;
        height: 48px;

        border-radius: 21px;
        border: 1px solid #000000;
        background-color: transparent;

        transition: all 0.75s;

        &:hover{
            color: ${theme.Colors.branco};
            border: transparent;
            background-color: #000000;
        }
    }
`;




