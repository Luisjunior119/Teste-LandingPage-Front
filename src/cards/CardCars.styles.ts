import styled from "styled-components";
import { theme } from "../global/theme";


export const CarContent = styled.div`
    width: 242px;
    height: 362px;

    border: 1px solid #000000;
    border-radius: 24px;
`;

export const CarCompany = styled.div`
    justify-content: center;
    display: flex;
    margin-top: 24px;
`;

export const CarYear = styled.div``;

export const CarKm = styled.div``;

export const CarPower = styled.div``;

export const CarShield = styled.div``;

export const CarButton = styled.div`
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




