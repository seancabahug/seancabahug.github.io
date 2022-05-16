import AltDocDisplay from "./AltDocDisplay";
import "./HighSchool.css";

export default function Sophomore() {
    return <div className="alt-docs-container">
        <AltDocDisplay name='Individual Research Report' topic="Writing">
            <iframe src="https://docs.google.com/document/d/e/2PACX-1vTWMlzkDpv6vQJ9VdQ9F703rF9b5FPbcStnFLwMy6A3_EMgOrjL7gRsBY85ILYhdQ/pub?embedded=true"></iframe>
        </AltDocDisplay>
        <AltDocDisplay name='Individual Written Argument' topic="Writing">
            <iframe src="https://docs.google.com/document/d/e/2PACX-1vSJVcKPGCF5x5MfojNB3PUyGRCTzUVfZrQnbcGBiCMHIVoykSS1iYN0lhxU2vLwzA/pub?embedded=true"></iframe>
        </AltDocDisplay>
        <AltDocDisplay name='Civil Disobedience Project Research Outline' topic="Reading">
            <iframe src="https://docs.google.com/document/d/e/2PACX-1vRQpBpkusQNDHO--CTLCTvPKpvyR_6dItq8haORQzGvm-sZn64B6uL9HL2msUQoO1DUY3ZmgoGN5r5W/pub?embedded=true"></iframe>
        </AltDocDisplay>
    </div>
}