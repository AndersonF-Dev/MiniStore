import produto from '../../assets/img/Celular-aple.png'
import {
    Wrapper,
    InforConteinter,
    TextoInfor,
    TitleInfor,
    BtnInfor,
    ImgInfor
} from './styleSale';

const Sale = () => {
  return (
    <Wrapper>
        <InforConteinter>
          <TextoInfor>
              10% de desconto
          </TextoInfor>
          <TitleInfor>
            Liquidação de ano novo
          </TitleInfor>
            <BtnInfor>Liquidação na loja</BtnInfor>
        </InforConteinter>
        <ImgInfor src={produto} alt='Produto'/>
        
    </Wrapper>
  )
}

export default Sale