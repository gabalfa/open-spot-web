import styled from 'styled-components'

export const ContentViewContainer = styled.div`
  grid-area: contentViewContainer;
  background-color: #fff;
  border-radius: 20px;

  margin: 0 auto;
  padding: 20px;

  max-height: 105%;

  margin: -90px 10px;

  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.1), 0 8px 16px 0 rgba(0, 0, 0, 0.19);

  @media screen and (min-width: 768px) {
    margin: 50px;
  }
`
