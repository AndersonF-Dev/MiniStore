import loja from '../../assets/img/v14_573.png'
import {
    Conteiner,
    Wrapper,
    Img,
    InfortWrapper,
    Title,
    TextInfor,
    BtnStore
} from './styleAboutUs'

const AboutUs = () => {
    return (
        <Conteiner>
            <Wrapper>
                <Img src={loja} alt='imagem da loja' />
                <InfortWrapper>
                    <Title>
                        Como a Ministore foi fundada?
                    </Title>
                    <TextInfor>
                        A Ministore nasceu da ideia de simplificar a forma como pequenos negócios criam sua presença digital. Fundada por um grupo de empreendedores apaixonados por tecnologia e inovação, a empresa surgiu com o propósito de oferecer uma solução acessível e eficiente para quem deseja montar sua própria loja online sem complicações.
                    </TextInfor>

                    <TextInfor>
                        Tudo começou com a observação de um problema comum: muitos comerciantes tinham ótimos produtos, mas enfrentavam dificuldades para vender pela internet. Foi então que criamos a Ministore — uma plataforma intuitiva, completa e pensada especialmente para quem quer começar a vender online com agilidade, sem precisar de conhecimentos técnicos.
                    </TextInfor>

                    <TextInfor>
                        Desde então, temos ajudado milhares de lojistas a transformar suas ideias em negócios digitais de sucesso.
                    </TextInfor>
                    <BtnStore>Compre em Nossa Loja</BtnStore>
                </InfortWrapper>

            </Wrapper>
        </Conteiner>
    )
}

export default AboutUs