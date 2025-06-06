import Button from "../../../components/Button/Button.js";
import "./NetworkError.css";

function NetworkError() {
    return (
        <div className="network-error">
            <h1 className="network-error__title">Bad news!</h1>
            <h2 class="network-error__subtitle">There was a network error. <br/> Go back, to home and try vote again</h2>
            <Button buttonType="card" buttonSize="medium" buttonText="Back to Home" buttonWidth="wide" className="guest--btn" buttonNavigateTo="/"/>
        </div>
    );
}

export default NetworkError;
