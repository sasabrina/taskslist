import styled, { createGlobalStyle } from "styled-components";
import { ButtonProps, ContainerProps, SpanProps } from "./models/styles";

const MEDIA_SM = "480px";
const MEDIA_MD = "768px";
const MEDIA_LG = "1240px";
const MEDIA_XL = "1420px";

export const size = {
  media_sm: `(min-width: ${MEDIA_SM})`,
  media_md: `(min-width: ${MEDIA_MD})`,
  media_lg: `(min-width: ${MEDIA_LG})`,
  media_xl: `(min-width: ${MEDIA_XL})`,
};

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    color: #333333;
}
`;

export const MainContainer = styled.main`
  padding: 50px;
  max-width: 500px;
  margin: auto;
`;

export const Container = styled.div<ContainerProps>`
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "")};
  display: ${({ flex }) => (flex ? "flex" : "block")};
  ${({ column }) => column && "flex-direction: column;"}
  justify-content: ${({ justify }) => (justify ? justify : "")};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "")};
  gap: ${({ gap }) => (gap ? gap : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  margin: ${({ margin }) => (margin ? margin : "20px 0")};
`;

export const H1 = styled.h1`
  text-align: center;
`;

export const Button = styled.button<ButtonProps>`
  font-size: 16px;
  font-weight: 400;
  padding: ${({ padding }) => (padding ? padding : "5px 15px")};
  border-radius: 4px;
  text-decoration: none;
  width: ${({ width }) => (width ? width : "")};
  cursor: pointer;
`;

export const List = styled.ul`
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 20%) 0px 1px 1px 0px, rgb(0 0 0 / 15%) 0px 1px 3px 0px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.li`
  list-style: none;
`;

export const Span = styled.span<SpanProps>`
  text-decoration: ${({ completed }) =>
    completed ? "line-through" : "inherit"};
  padding-left: 10px;
`;

export const Form = styled(Container)`
  flex-direction: column;

  @media ${size.media_sm} {
    flex-direction: row;
  }
`;

export const Input = styled.input`
  padding: 5px 15px;
  font-size: 16px;

  &::placeholder {
    font-size: 16px;
  }
`;
