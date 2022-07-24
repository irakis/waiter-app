import List from "../views/List.js";
import { useDispatch } from "react";
import { useEffect } from "react";
import { fetchTables } from "../redux/tablesRedux";

const Home = () => {
    const dispatch = useDispatch()

    useEffect(()=> dispatch(fetchTables()), [dispatch])

    return (
        <div>
            <h1>Home this is...All tables</h1>
            <List/>
        </div>
    )
}
export default Home;