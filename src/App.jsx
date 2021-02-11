import styled from "styled-components";
import Footer from "./components/Footer";

import NavigationBar from "./components/NavigationBar";
import Routes from "./routes";

const Wrapper = styled.div`
  display: flex;
  flex-direction:column;
`

const ContentContainer = styled.main`
  max-width: 1520px;
  margin: 0 auto;
  padding: 0 10px;
  margin-top: 20px;
  flex: 1 1 auto;
`

const App = () => {
    return (
        <>
            <Wrapper>
                <NavigationBar/>
                <ContentContainer>
                    <Routes/>
                </ContentContainer>
                <Footer/>
            </Wrapper>
        </>
    )
};

export default App;
