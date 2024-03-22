//dit is een wijziging
function Button({ text, disabled }) {
    return (
        <button
            onClick={() => console.log(text)}

            disabled={disabled}//disabled is een standaard html attribuut voor buttons
            //in de CSS wordt dit weer geselecteerd middels een pseudoclass om er speciale styling aan te geven
        //als disabled ==true
        >
            {text}
        </button>
    );
}

export default Button;