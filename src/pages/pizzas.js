import React from 'react';
import { graphql } from 'gatsby';

import PizzaList from '../components/PizzaList';

export default function PizzasPage({ data }) {
  // No need to add loading states since everything is pre-populated before page loads
  const pizzas = data.pizzas.nodes;
  return (
    <>
      <PizzaList pizzas={pizzas} />
    </>
  );
}

// dynamic page queries must happen at top level (page level)
// static queries can happen anywhere
//
// Gatsby recongizes the exported query and passes it down as props
export const pageQuery = graphql`
  query PizzaQuery {
    pizzas: allSanityPizza {
      nodes {
        id
        name
        price
        slug {
          current
        }
        toppings {
          id
          name
        }
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
