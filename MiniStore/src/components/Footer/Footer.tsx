import logo from '../../assets/logo.svg'
import { FaFacebookF, FaInstagram  } from "react-icons/fa6";
import {
    Conteiner,
    Company,
    ImgLogo,
    Infor,
    SocialList,
    SocialItem,
    Wrapper
} from './styleFooter'

const Footer = () => {
  return (
    <Conteiner>
        <Wrapper>
            <Company>
                <ImgLogo src={logo} alt='Logomarca'/>
                <Infor>
                    Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit. Gravida massa volutpat aenean odio erat nullam fringilla.
                </Infor>
                <SocialList>
                    <SocialItem>
                        <FaFacebookF />
                        <FaInstagram />
                    </SocialItem>
                </SocialList>
            </Company>
        </Wrapper>
        Footer
    </Conteiner>
  )
}

export default Footer