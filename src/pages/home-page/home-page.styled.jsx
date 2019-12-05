import mainImage from './pictures/main-image.jpg';
import styled from 'styled-components';

export const HomePageHeaderAndImage = styled.div`
  background-image: url(${mainImage});
  background-size: cover;
  width: 100%;
  height: 900px;
`;