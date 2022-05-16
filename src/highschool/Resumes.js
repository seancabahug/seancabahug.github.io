import DocDisplay from "./DocDisplay";
import "./HighSchool.css";

export default function Resumes() {
    return <div className="docs-container">
        <DocDisplay name="Academic Resume">
            <iframe src="https://docs.google.com/document/d/e/2PACX-1vSa2qc9GLeVicp1lodYWKd4RCCKHLL_KdFWYcRg68pNy7hyM0XNeo7MBIEkbnDgyA/pub?embedded=true"></iframe>
        </DocDisplay>
        <DocDisplay name="Professional (Technical) Resume">
            <iframe src="https://docs.google.com/document/d/e/2PACX-1vTqmmgGFh7wLF4QvGuN3UUzpT0NcWICzexV_SJvk2gF7XHkOt-DomGBIzUGcDbEjTJ60E43segfl4uk/pub?embedded=true"></iframe>
        </DocDisplay>
    </div>
}