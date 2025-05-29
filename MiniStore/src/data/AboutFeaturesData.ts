
import IconCarrinho from '../assets/icon/carrinho.svg';
import Iconqualidade from '../assets/icon/qualidade.svg';
import IconTag from '../assets/icon/tag.svg';
import IconSeguranca from '../assets/icon/seguranca.svg';

import type { FeatureItem } from '../types/Feature';

const aboutFeatures: FeatureItem[] = [
  { icon: IconCarrinho, title: 'ENTREGA GRÁTIS', subtitle: 'Para compras acima de R$ 100,00' },
  { icon: Iconqualidade, title: 'Garantia de qualidade', subtitle: 'Garantimos a qualidade dos nossos produtos' },
  { icon: IconTag, title: 'Ofertas diárias', subtitle: 'Temos ofertas todos os dias da semana' },
  { icon: IconSeguranca, title: 'Pagamento 100% seguro', subtitle: 'Pagamento feito em um anbiente 100% seguro' },
];

export default aboutFeatures;