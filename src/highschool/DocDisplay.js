import "./DocDisplay.css";

export default function DocDisplay(props) {
    return <div className="doc-display">
        <h2 className="doc-display-header">{props.name}</h2>
        {props.children}
    </div>
}