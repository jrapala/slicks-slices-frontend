import styled from 'styled-components';

const OrderStyles = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  fieldset {
    grid-column: span 2;
    max-height: 600px;
    overflow: hidden;

    label {
      display: grid;
      gap: 1rem;
      align-content: start;
    }
    label + label {
      margin-top: 1rem;
    }

    &.order,
    &.menu {
      grid-column: span 1;
      height: 600px;
    }
  }

  .mapleSyrup {
    /* Use none (or transforms), not hidden, for honeypot */
    /* Screen readers will skip 'none' */
    display: none;
  }

  @media (max-width: 900px) {
    fieldset.menu,
    fieldset.order {
      grid-column: span 2;
    }
  }
`;

export default OrderStyles;
