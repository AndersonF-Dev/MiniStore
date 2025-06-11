import React from 'react';
import store from '../../assets/img/imgpost.svg'
import {
  Wrapper,
  ImageSection,
  ContentSection,
  Title,
  Description,
  LocationGrid,
  LocationBox,
  Country,
  Info,
  StoreImage,
} from './styleOurStores';

const OurStores: React.FC = () => {
  return (
    <Wrapper>
      <ImageSection>
        <StoreImage
          src={store}
          alt="Our Store"
        />
      </ImageSection>

      <ContentSection>
        <Title>Our stores</Title>
        <Description>You can also directly buy products from our stores.</Description>

        <LocationGrid>
          <LocationBox>
            <Country>USA</Country>
            <Info>730 Glenstone Ave 65802, Springfield, US</Info>
            <Info>+123 222 333 44</Info>
            <Info>+123 666 777 88</Info>
            <Info>ministore@yourinfo.com</Info>
          </LocationBox>

          <LocationBox>
            <Country>France</Country>
            <Info>13 Rue Montmartre 75001, Paris, France</Info>
            <Info>+123 222 333 44</Info>
            <Info>+123 666 777 88</Info>
            <Info>ministore@yourinfo.com</Info>
          </LocationBox>
        </LocationGrid>
      </ContentSection>
    </Wrapper>
  );
};

export default OurStores;
