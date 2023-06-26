import styled from 'styled-components';

const colors = {
  background: '#black',
  title: '#eeeeee',
  subtitle: '#eeeeee',
  text: '#eeeeee',
  button: '#000',
  buttonHover: '#000',
  buttonBorder: '#000',
  buttonBorderHover: '#000'
};

export const Background = styled.div`
  background: ${colors.background};
  height: 100vh;
  width: 100vw;
`;

export const Title = styled.h1`
  font-size: 1.5em;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  color: ${colors.title};
`;

export const Subtitle = styled.h2`
  font-size: 1.2em;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  color: ${colors.subtitle};
`;

export const Text = styled.p`
  font-size: 1em;
  font-family: 'Roboto', sans-serif;
  color: ${colors.text};
`;  

export const Button = styled.button`
  font-size: 1em;
  font-family: 'Roboto', sans-serif;
  color: ${colors.button};
  background: transparent;
  border: 2px solid ${colors.buttonBorder};
  border-radius: 3px;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  cursor: pointer;

  &:hover {
    background: ${colors.buttonHover};
    border: 2px solid ${colors.buttonBorderHover};
  }
`;
