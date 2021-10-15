import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'
import { SectionAboutProjectProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

const SectionAboutProject = ({
  title,
  description,
  media
}: SectionAboutProjectProps) => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image>
          <img
            src={getImageUrl(media.url)}
            loading="lazy"
            alt={media.alternativeText}
          />
        </S.Image>
        <div>
          <Heading>{title}</Heading>
          <S.Text
            dangerouslySetInnerHTML={{
              __html: description
            }}
          ></S.Text>
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default SectionAboutProject
