import AltDocDisplay from "./AltDocDisplay";
import "./HighSchool.css";

export default function Senior() {
    return <div className="alt-docs-container">
        <AltDocDisplay name='Literary Analysis of Moral Disregard in Hamlet' topic="Writing">
            <iframe src="https://docs.google.com/document/d/e/2PACX-1vR9rqjrb6QhgSNN-r6cwNpvWUZ53_BI9nwjF-F_hESZnQjkgpeq5XZarMJMgV5Nog/pub?embedded=true"></iframe>
        </AltDocDisplay>
        <AltDocDisplay name={'Annotations of Shakespeare\'s Hamlet'} topic="Reading">
            <iframe src="https://docs.google.com/document/d/e/2PACX-1vRSKE5jp3rQ2cxhxtSYWXyzly2Q9Q2lDP1XH_RAoI9zzoy99zy8z2cMTD4y-d3UZQ/pub?embedded=true"></iframe>
        </AltDocDisplay>
        <AltDocDisplay name='Revenge in Hamlet Presentation' topic="Speaking">
            <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSk0bauvL29T-LRuCydYp5CLpOF5jgb3a15FePFmesHUFAk1KLdRezFzHOz2YNuZ0HR2ybq0yQa_T6b/embed?start=true&loop=true&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
        </AltDocDisplay>
    </div>
}