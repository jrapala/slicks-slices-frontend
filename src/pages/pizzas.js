import React from 'react';
import { graphql } from 'gatsby';

import PizzaList from '../components/PizzaList';
import ToppingsFilter from '../components/ToppingsFilter';

export default function PizzasPage({ data }) {
  // No need to add loading states since everything is pre-populated before page loads
  const pizzas = data.pizzas.nodes;
  return (
    <>
      <ToppingsFilter />
      <PizzaList pizzas={pizzas} />
    </>
  );
}

// dynamic page queries must happen at top level (page level)
// static queries can happen anywhere
//
// Gatsby recongizes the exported query and passes it down as props
export const pageQuery = graphql`
  # Another option is to use Regex (gatsby-node.js must be updated as well)
  # query PizzaQuery($toppingRegex: String) {
  query PizzaQuery($topping: [String]) {
    pizzas: allSanityPizza(
      # Regex route:
      # filter: { toppings: { elemMatch: { name: { regex: $toppingRegex } } } }
      filter: { toppings: { elemMatch: { name: { in: $topping } } } }
    ) {
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
            fixed(width: 200, height: 200) {
              ...GatsbySanityImageFixed
            }
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
