import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  width: 100%;
  /* padding: 40px; */
  align-items: center;
  justify-content: center;

  /* background-color: #f8f8f8; */
  `;

export const ImageSection = styled.div`
  flex: 1;
  max-width: 500px;
  align-items: start;
  min-width: 300px;

  /* background-color: aqua; */
`;

export const StoreImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 12px;
`;

export const ContentSection = styled.div`
  flex: 1;
  min-width: 300px;
  width: 100%;
  text-align: left;

  /* background-color: brown; */
`;

export const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 12px;
  color: #E0E0E0;
`;

export const Description = styled.p`
  font-size: 16px;
  color: #B5B5B5;
  margin-bottom: 24px;
`;

export const LocationGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

export const LocationBox = styled.div`
  flex: 1;
  min-width: 220px;
  /* background-color: #fff; */
  padding: 16px;
  border-radius: 10px;
  
`;

export const Country = styled.h4`
  font-size: 18px;
  margin-bottom: 10px;
  color: #E0E0E0;
`;

export const Info = styled.p`
  font-size: 14px;
  color: #B5B5B5;
  margin-bottom: 6px;
`;
