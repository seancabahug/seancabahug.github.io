import {
    Switch,
    Route,
    useRouteMatch
} from 'react-router-dom';
import "../Home.css";
import "./HighSchool.css";

function FullPage(props) {
    return <div className="full-page">{props.children}</div>
}

export default function HighSchool() {

    return <>
        <FullPage>yooo</FullPage>
    </>;
}