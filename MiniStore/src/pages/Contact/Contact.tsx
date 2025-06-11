// import React from 'react'
import Newsletter from '../../components/Newsletter/Newsletter';
import PageHeader from '../../components/PageHeader/PageHeader'
import InstagramFeed from '../../components/InstagramFeed/InstagramFeed';
import ContactForm from '../../components/ContactForm/ContactForm';
import OurStores from '../../components/OurStores/OurStores';
import {
    ContactSection,
    ContactConteiner,
    ContactInfo,
    InfoTitle,
    ContactDescription,
    TableWrapper,
    TitleRow,
    Column,
    // Label,
    Info,
} from './styleContact'

const Contact = () => {
    const token = "IGQVJ..."; // Depois virá da sua API em Node.js

    const data = {
    address: '730 Glenstone Ave 65802, Springfield, US',
    phone1: '+123 222 333 44',
    phone2: '+123 666 777 88',
    email: 'ministore@yourinfo.com',
  };

  return (
    <ContactSection>
        <PageHeader
                    title="Contato"
                    breadcrumbs={[
                        { name: "Início", path: "/" },
                        { name: "Produtos", path: "/shop" },
                        { name: "Contato"}
                    ]}
                    // variant="product"
                />
                
                <ContactConteiner>
                    <ContactInfo>
                        <InfoTitle>Informações de contato</InfoTitle>
                        <ContactDescription>
                            Tortor dignissim convallis aenean et tortor at risus viverra adipiscing.
                        </ContactDescription>
                    

                        <TableWrapper>
                            <Column>
                                <TitleRow>Office</TitleRow>
                                <Info>{data.address}</Info>
                                <Info>{data.phone1}</Info>
                                <Info>{data.phone2}</Info>
                                <Info>{data.email}</Info>
                            </Column>

                            <Column>
                                <TitleRow>Management</TitleRow>
                                <Info>{data.address}</Info>
                                <Info>{data.phone1}</Info>
                                <Info>{data.phone2}</Info>
                                <Info>{data.email}</Info>
                            </Column>
                        </TableWrapper>
                    </ContactInfo>
                    <ContactForm />
                </ContactConteiner>
                <OurStores />
        <Newsletter />
        <InstagramFeed token={token} />
        
    </ContactSection>
  )
}

export default Contact