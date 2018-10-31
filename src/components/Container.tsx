import styled from 'react-emotion';

const Container = styled('div')`
display: grid;
justify-self: center; 
max-width: 90%;
height: auto;
margin: 0 auto;

@media only screen and (min-width: 485px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
}

@media only screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
}

@media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
}
`

export default Container;