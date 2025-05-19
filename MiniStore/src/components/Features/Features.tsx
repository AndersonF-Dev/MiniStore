import type {  FeaturesProps } from '../../types/Feature';
import {
  Conteiner,
  Conteiter,
  Icon,
  ConteinerText,
  Title,
  SubTitle
} from './styleFeatures';

const Features: React.FC<FeaturesProps> = ({ items }) => {
  return (
    <Conteiner>
      {items.map((item, index) => (
        <Conteiter key={index}>
          <Icon src={item.icon} alt={`icon-${index}`} />
          <ConteinerText>
            <Title>{item.title}</Title>
            <SubTitle>{item.subtitle}</SubTitle>
          </ConteinerText>
        </Conteiter>
      ))}
    </Conteiner>
  );
};

export default Features;