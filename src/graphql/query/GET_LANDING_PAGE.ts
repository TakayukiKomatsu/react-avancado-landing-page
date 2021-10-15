import { gql } from 'graphql-request'

const GET_LANDING_PAGE = gql`
  fragment logo on LandingPage {
    logo {
      alternativeText
      url
    }
  }

  fragment header on LandingPage {
    header {
      title
      description
      button {
        label
        url
      }
      media {
        url
        alternativeText
      }
    }
  }

  fragment sectionAboutProject on LandingPage {
    sectionAboutProject {
      description
      title
      media {
        url
        alternativeText
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...header
      ...sectionAboutProject
    }
  }
`

export default GET_LANDING_PAGE
