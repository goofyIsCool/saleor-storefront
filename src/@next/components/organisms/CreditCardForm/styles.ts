import { media, styled } from "@styles";

export const PaymentForm = styled.form`
  width: 100%;
`;

export const PaymentInput = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;
PaymentInput.displayName = "S.PaymentInput";

export const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  & > div {
    padding-right: ${props => props.theme.spacing.spacer};
    &:last-child {
      padding-right: 0;
    }
    ${media.smallScreen`
      padding-right:  0;
      flex-direction: column;
    `}
  }
`;
