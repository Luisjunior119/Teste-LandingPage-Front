import styled from "styled-components";
import { colorsMapping } from "../../global/colorsMapping";
import { IStylesProps } from "./text.types"

export const CustomSpan = styled.span<IStylesProps>`
    color: ${({ color }) => colorsMapping(color)};
    font-weight: ${({ weight }) => weight};
    font-size: ${({ size }) => size}px;
`;