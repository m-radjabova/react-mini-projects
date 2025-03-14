
function Input (props) {
    return (
        <div className="input-container">
            <input type="text" placeholder={props.placeholder} />
            <button type="submit">{props.text}</button>
        </div>
    );
}

export default Input