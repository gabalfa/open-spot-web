import styled from 'styled-components'

export const LayoutContainer = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Pangolin&display=swap');

  & h1 {
    font-family: 'Roboto', sans-serif;
  }
  & h2 {
    font-family: 'Roboto', sans-serif;
  }
  & h3 {
    font-family: 'Roboto', sans-serif;
  }
  & h4 {
    font-family: 'Roboto', sans-serif;
  }
  & div {
    font-family: 'Roboto', sans-serif;
  }
  & input {
    font-family: 'Roboto', sans-serif;
  }
  & label {
    font-family: 'Roboto', sans-serif;
  }
  & button {
    font-family: 'Roboto', sans-serif;
  }

  background-color: #eff5ff;
  display: grid;
  grid-template-rows: 25% auto 15%;
  grid-template-areas:
    'stepBarContainer stepBarContainer'
    'contentViewContainer contentViewContainer'
    'bottomBarContainer bottomBarContainer';
  border-radius: 10px;
  height: 100vh;
  width: 100vw;

  @media screen and (min-width: 768px) {
    background-color: #fff;
    margin-top: 10vh;
    margin-bottom: 10vh;
    height: 80vh;

    max-width: 900px;
    grid-template-columns: 40% 60%;
    grid-template-rows: auto 15%;
    grid-template-areas:
      'stepBarContainer contentViewContainer'
      'stepBarContainer bottomBarContainer';
  }
`
