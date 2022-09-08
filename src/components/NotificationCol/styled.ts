import styled from "styled-components";

const PopoverColContainer = styled.div`
  padding: 10px 15px;
  border-bottom: 1px solid var(--clr-grey-secondary);
  color: ${({ theme }) =>
    theme.darkmode ? "var(--clr-white-primary)" : "var(--clr-black)"};
`;

export { PopoverColContainer };
