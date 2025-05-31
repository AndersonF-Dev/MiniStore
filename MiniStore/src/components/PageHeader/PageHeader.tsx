// import React from "react";
import { Container, Title, Breadcrumb } from "./stylePageHeader";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
  name: string;
  path?: string; // opcional para o último item (sem link)
}

interface PageHeaderProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  variant?: 'default' | 'product';
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, breadcrumbs }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Breadcrumb>
        {breadcrumbs.map((item, index) => (
          <span key={index}>
            {item.path ? (
              <Link to={item.path}>{item.name}</Link>
            ) : (
              <span>{item.name}</span>
            )}
            {index < breadcrumbs.length - 1 && " / "}
          </span>
        ))}
      </Breadcrumb>
    </Container>
  );
};

export default PageHeader;
