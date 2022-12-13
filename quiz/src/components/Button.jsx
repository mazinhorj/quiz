import "./Button.css";

const Button = ({id, text, action, key}) => {
    const handleAction = (e) => {
        action(e);
    }
    return (
        <button key={id} id={id} onClick={handleAction}>{text}</button>
    )
}

export default Button