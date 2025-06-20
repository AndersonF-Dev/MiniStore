import logo from '../../assets/logo.svg'
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import {
  Conteiner,
  Company,
  ImgLogo,
  InforCompany,
  SocialList,
  SocialItem,
  Wrapper,
  QuickLinksConteiner,
  QuickLinksTitle,
  QuickLinksList,
  QuickLinksItem,
  HelpInfoConteiner,
  HelpInfoTitle,
  HelpInfoList,
  HelpInfoItem,
  ContactUsConteiner,
  ContactUsTitle,
  ContactUsInfor,
  ContactUsEmailPhone,
} from './styleFooter'

const Footer = () => {
  return (
    <Conteiner>
        <Company>
          <ImgLogo src={logo} alt='Logomarca' />
          <InforCompany>
            Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit. Gravida massa volutpat aenean odio erat nullam fringilla.
          </InforCompany>
          <SocialList>
            <SocialItem><FaFacebookF /></SocialItem>
            <SocialItem><FaInstagram /></SocialItem>
          </SocialList>
        </Company>
      <Wrapper>

        <QuickLinksConteiner>
          <QuickLinksTitle>LINKS RÁPIDOS</QuickLinksTitle>
          <QuickLinksList>
            <QuickLinksItem>HOME</QuickLinksItem>
            <QuickLinksItem>SOBRE</QuickLinksItem>
            <QuickLinksItem>LOJA</QuickLinksItem>
            <QuickLinksItem>BLOG</QuickLinksItem>
            <QuickLinksItem>CONTATO</QuickLinksItem>
          </QuickLinksList>
        </QuickLinksConteiner>

        <HelpInfoConteiner>
          <HelpInfoTitle>Ajuda e informações</HelpInfoTitle>
          <HelpInfoList>
            <HelpInfoItem>Rastreie seu pedido</HelpInfoItem>
            <HelpInfoItem>Políticas de devolução</HelpInfoItem>
            <HelpInfoItem>Envio + Entrega</HelpInfoItem>
            <HelpInfoItem>Contate-nos</HelpInfoItem>
            <HelpInfoItem>Perguntas frequentes</HelpInfoItem>
          </HelpInfoList>
        </HelpInfoConteiner>

        <ContactUsConteiner>
          <ContactUsTitle>Contate-nos</ContactUsTitle>
          <ContactUsInfor>Você tem alguma dúvida ou sugestão?</ContactUsInfor>
          <ContactUsEmailPhone>yourinfo@gmail.com</ContactUsEmailPhone>
          <ContactUsInfor>Precisa de suporte? Ligue para nós.</ContactUsInfor>
          <ContactUsEmailPhone>+55 111 222 333 44</ContactUsEmailPhone>
        </ContactUsConteiner>

      </Wrapper>
    </Conteiner>
  );
}

export default Footer;
