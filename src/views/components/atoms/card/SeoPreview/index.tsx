import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'styled-bootstrap-grid';
import './index.style.scss';

const Header = styled.div`
  background-color: ${({ theme }) => theme.color.bg[0]};
`;
const Favicon = styled.div``;
const Body = styled(Row)`
  background-color: ${({ theme }) => theme.color.bg[1]};
  color: ${({ theme }) => theme.color.text[2]};
`;
const Url = styled.div``;
const ImageCol = styled(Col)<styleProps>`
  background-image: ${({ bg }) => `url(${bg})`};
`;
const Content = styled(Col)``;
const RootWrap = styled.a`
  ${Row} {
    margin-left: 0;
    margin-right: 0;
  }
  &:hover {
    ${Header} {
      background-color: ${({ theme }) => theme.color.primary};
      color: ${({ theme }) => theme.color.grayscales.light[0]};
    }
    ${Body} {
      color: ${({ theme }) => theme.color.text[1]};
      border: 1px solid ${({ theme }) => theme.color.text[2]};
    }
  }
`;

const SeoPreviewCard = ({ data }: props) => {
  const { title, description, url, favicon, image } = data;
  const decodeUrl = decodeURI(url);
  return (
    <RootWrap href={decodeUrl} className="seoPreview">
      <Header className="_header">
        <Favicon className="_favicon">
          <img src={favicon} alt="" />
        </Favicon>
        <div>{title}</div>
      </Header>
      <Body className="_body">
        <Content col className="_content">
          <div className="_description">{description}</div>
          <Url className="_url">{decodeUrl}</Url>
        </Content>
        {image && <ImageCol col={12} sm={4} bg={image} className="_thumnail" />}
      </Body>
    </RootWrap>
  );
};

export default SeoPreviewCard;
interface styleProps {
  bg?: string;
}
interface props {
  data: {
    title: string;
    description: string;
    url: string;
    image?: string;
    favicon?: string;
    // optional
    site_name?: string;
    type?: string;
  };
}
