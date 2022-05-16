import "./AltDocDisplay.css";

export default function AltDocDisplay(props) {
    return <div className="alt-doc-display">
        <div className="alt-doc-description">
            <h1 className="alt-doc-display-topic">{props.topic}</h1>
            <h2 className="alt-doc-display-header">{props.name}</h2>
        </div>
        {props.children}
    </div>
}