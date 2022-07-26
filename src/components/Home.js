import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTables } from "../redux/tablesRedux";
import { Row, Col } from 'react-bootstrap';
import { getAllTables} from '../redux/tablesRedux';
import List from "../views/List.js";
import { fetchStatus } from "../redux/statusRedux";

const Home = () => {
    fetchStatus()
    const dispatch = useDispatch()
    useEffect(()=> dispatch(fetchTables()), [dispatch])
    const tablesList = useSelector(getAllTables);
    console.log('tablesList: ',tablesList);

    return (
        <Row>
            <Col>
                <h1>All tables</h1>
                {tablesList.map(tableList => <List props={tableList} key={tableList.id}/>)}
            </Col>
        </Row>
    )
}
export default Home;