import React, { useState } from 'react';
import { tabs } from '../../data/productsData';

import { Wrapper, TabsHeader, TabButton, Content } from './styleHorizontalAccordion';

const HorizontalAccordion: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const renderContent = (content: typeof tabs[0]['content']) => {
    switch (content.type) {
      case 'text':
        return <p>{content.content}</p>;

      case 'list':
        return (
            <ul>
                <li>Weight: <span>{content.content[0]}</span></li>
                <li>Material: <span>{content.content[1]}</span></li>
                <li>Warranty: <span>{content.content[2]}</span></li>
            </ul>
        );

      case 'reviews':
        return (
          <>
            {content.content.map((review, idx) => (
              <p key={idx}>
                <strong>{review.name}:</strong> {review.text}{' '}
                {'⭐'.repeat(review.rating)}
              </p>
            ))}
          </>
        );

      default:
        return null;
    }
  };

  return (
    <Wrapper>
      <TabsHeader>
        {tabs.map((tab, index) => (
          <TabButton
            key={index}
            active={index === activeTab}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </TabButton>
        ))}
      </TabsHeader>
      <Content>{renderContent(tabs[activeTab].content)}</Content>
    </Wrapper>
  );
};

export default HorizontalAccordion;