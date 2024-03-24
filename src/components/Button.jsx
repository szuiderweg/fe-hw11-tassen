function Button({text, disabled}) {
    return (
        <button type="button"
                disabled={disabled}
                onClick={() => console.log({text})}>
            {text}
        </button>
    );
}

export default Button;