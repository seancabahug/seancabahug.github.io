import AltDocDisplay from "./AltDocDisplay";
import "./HighSchool.css";

export default function Junior() {
    return <div className="alt-docs-container">
        <AltDocDisplay name='Thematic Music Analysis in "A New Hope"' topic="Writing">
            <iframe src="https://docs.google.com/document/d/e/2PACX-1vTD6iixFldApTZ-248hoi88KPD5a_kxVrQlF95vhAE2zPdwfJkgtaXrjzXR2sWQNw/pub?embedded=true"></iframe>
        </AltDocDisplay>
        <AltDocDisplay name='Comparative Analysis of "Brave New World" and "The Language Police"' topic="Reading">
            <iframe src="https://docs.google.com/document/d/e/2PACX-1vRfM7tby7sPSoqY8bOC1FAPaJoi5HnSeYTG7G3Kf4HsDjAodDYtIMIFI2pwOjoPcQ/pub?embedded=true"></iframe>
        </AltDocDisplay>
        <AltDocDisplay name='Gender in the 1990s Presentation' topic="Speaking">
            <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQgC-IfB_3cdEAXjTaqQ-Hno14e31U8yO4zs9vyxR5QWnrggoOJDeXowEZqn15jsZFVEaPdT5JLPBs0/embed?start=true&loop=true&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
        </AltDocDisplay>
    </div>
}