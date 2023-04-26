import { Header, Main, Footer } from "../components/layout";


const Master = ({ children }) => {
    return <>
        <Header />
        <Main>
            {children}
        </Main>
        <Footer />
    </>
}

export default Master;