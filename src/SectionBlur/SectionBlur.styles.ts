import styled from "styled-components";

import blurbackground from "../assets/fotocarrobackground.jpg"
import { theme } from "../global/theme";

export const Container = styled.div`
    background-image: url(${blurbackground});
    background-position: top;
    background-size: cover;
    height: 420px;
    width: 100%;
    top: 0;

    margin-top: 50px;
`;

export const BlurContent = styled.div`
    display: flex;
    flex-direction: column;
    float: right;
    text-align: right;
    padding: 48px 62px;
`;

export const Title = styled.div`
`;


export const Description = styled.div`
    line-height: 250%;
`;


export const SeeOtherCars = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 16px;

    button {

        width: 273px;
        height: 48px;

        color: #fff;
        border-radius: 4px;
        border: 1px solid #fff;
        background-color: transparent;

        transition: all 0.75s;

        &:hover{
            color: ${theme.Colors.preto};
            border: transparent;
            background-color: #fff;
        }
    }
`;





