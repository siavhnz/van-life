import Wrapper from "./Wrapper";

const Main = ({ children }) => {
    return <main>
        <Wrapper>
            {children}
        </Wrapper>
    </main>
}

export default Main;