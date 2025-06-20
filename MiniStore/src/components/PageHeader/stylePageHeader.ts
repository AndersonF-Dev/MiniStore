import styled from "styled-components";
import { mixins } from "../../styles/theme/media";

interface VariantProps {
  variant?: "default" | "product";
}

export const Container = styled.div`
  ${mixins.flexAlignCentertColumn}
  width: 100%;
  padding: 2rem 1rem;
`;

export const Title = styled.h1<VariantProps>`
  font-size: ${({ variant }) => (variant === "product" ? "3rem" : "5.188rem")};
  margin-bottom: 0.5rem;
  color: ${({ variant }) => (variant === "product" ? "#333" : "#E0E0E0")};
`;

export const Breadcrumb = styled.div<VariantProps>`
  font-size: 1rem;

  a {
    text-decoration: none;
    color: ${({ variant }) => (variant === "product" ? "#777" : "#D8D4D4")};
    transition: color 0.2s;

    &:hover {
      color: ${({ variant }) =>
        variant === "product" ? "#007B8A" : "#00BCD4"};
    }
  }
`;
