import { gql } from 'graphql-request'

const GET_LANDING_PAGE = gql`
  fragment logo on LandingPage {
      logo {
        alternativeText
        url
    }
  }
      }
  query GET_LANDING_PAGE {
    landingPage {
      ...logo
    }
  }
`

export default GET_LANDING_PAGE
