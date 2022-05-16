import AltDocDisplay from "./AltDocDisplay";
import "./HighSchool.css";

export default function Freshman() {
    return <div className="alt-docs-container">
        <AltDocDisplay name='"Fast Food Nation" Final' topic="Writing">
            <iframe src="https://docs.google.com/document/d/e/2PACX-1vQAmHPMU2D-C62cjG9bwoxrWU_AqfImWpnZE-K7LGTXV58oZrPPhgqcCPzRKb1amg/pub?embedded=true"></iframe>
        </AltDocDisplay>
        <AltDocDisplay name='"To Kill a Mockingbird" Analysis' topic="Reading">
            <iframe src="https://docs.google.com/document/d/e/2PACX-1vQHt7nMun2q82tnRT3JwUbZIoYx908GJfVNSt_DVCdgAeyHNfOBXbO0To-lQvpQBhje4j4BBaOZZkff/pub?embedded=true"></iframe>
        </AltDocDisplay>
        <AltDocDisplay name='"Fast Food Nation" Food Chain Founders Presentation' topic="Speaking">
            <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vS1fIBbACBod6F9DIk9bf4Z-uUfb0x7SC2JcroNUX7vvtxl1PevSYj0iK-maOUmIC5ni-gu94oIqUgb/embed?start=true&loop=true&delayms=5000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
        </AltDocDisplay>
    </div>
}