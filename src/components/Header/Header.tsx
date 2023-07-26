import logo from "../../assets/logo.png"
import icon from "../../assets/ant-design_user-outlined.png"
import { Text } from "../Text/text";
import { Container, HeaderContainer, Logo, Navbar, Navigation, SignUser } from "./Header.styles"

export const Header = () => {
  
  return (
    <Container>
      <HeaderContainer>
        <Navbar>
          <Logo>
            <img src={logo} alt="" />
          </Logo>
        <Navigation>
          <a href="/">Home</a>
          <a href="/">Sobre</a>
          <a href="/">Tabela</a>
          <a href="/">Fale Conosco</a>
        </Navigation>

        <SignUser>
          <Text color="branco" size="20" weight={400}>
            Entrar
          </Text>
          <img src={icon} alt="" />

        </SignUser>
        </Navbar>
        </HeaderContainer>

    </Container>
  )
}
