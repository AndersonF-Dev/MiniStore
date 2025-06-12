import type {  FeaturesProps } from '../../types/Feature';
import {
  Conteiner,
  Wrapper,
  GridWrapper,
  Icon,
  ConteinerText,
  Title,
  SubTitle
} from './styleFeatures';

const Features: React.FC<FeaturesProps> = ({ items }) => {
  return (
    <Conteiner>
      <GridWrapper>
        {items.map((item, index) => (
          <Wrapper key={index}>
            <Icon src={item.icon} alt={`icon-${index}`} />
            <ConteinerText>
              <Title>{item.title}</Title>
              <SubTitle>{item.subtitle}</SubTitle>
            </ConteinerText>
          </Wrapper>
        ))}
      </GridWrapper>
    </Conteiner>
  );
};

export default Features;