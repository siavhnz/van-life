import Filter from "../components/vans/Filter";
import List from "../components/vans/List";
import Master from "./master";

const Vans = () => {
    return <Master>
        <Filter />
        <List />
    </Master>
}

export default Vans;