import { Outlet } from "react-router-dom";
import Menu from "../../components/host/Menu";

const Host = () => {
    return <>
        <Menu />
        <Outlet />
    </>
}
export default Host;