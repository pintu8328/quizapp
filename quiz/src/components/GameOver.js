import styled from 'styled-components'
import {Button} from './Button'

const Title = styled.h1`
    margin-top: 3em;
    font-size: 45px;
`;

const Points = styled.p`
    font-size: 24px;
    margin-bottom: 3em;
`;

const GameOver = ({pts}) => {

    const refreshPage = () => window.location.reload();

    return (
        <>
            <Title>Game Over</Title>
            <Points>You scored {pts} out of 10 !</Points>
            <Button onClick={refreshPage}>Retry</Button>
        </>
    )
}

export default GameOver
