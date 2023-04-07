import { useState } from "react";
import styled from "@emotion/styled";
import { Intro } from "./components";
import Spline from "@splinetool/react-spline";

const ContainerStyled = styled.div`
    width: 100vw;
    height: 100vh;

    position: relative;
    overflow: hidden;

    background-color: #000;
`;

function App() {
    const [loaded, setLoaded] = useState(false);

    // const handleLoad = () => setLoaded(true);
    function handleLoad() {
        setLoaded(true);
    }

    return (
        <ContainerStyled>
            {loaded ? null : <Intro />}
            <Spline
                scene="https://prod.spline.design/0-XFBKi8RoWjaOt2/scene.splinecode"
                onLoad={handleLoad}
            />
        </ContainerStyled>
    );
}

export default App;
