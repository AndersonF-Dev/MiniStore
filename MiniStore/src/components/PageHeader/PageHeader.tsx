// import React from "react";
import { Container, Title, Breadcrumb } from "./stylePageHeader";
import { Link } from "react-router-dom";

interface PageHeaderProps {
  pageName: string;
  pagePath: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ pageName, pagePath }) => {
  return (
    <Container>
      <Title>{pageName}</Title>
      <Breadcrumb>
        <Link to="/">Home</Link> / <Link to={pagePath}>{pageName}</Link>
      </Breadcrumb>
    </Container>
  );
};

export default PageHeader;
