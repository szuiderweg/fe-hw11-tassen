
function Tile({ image, imgDescription, title, children }) {
    console.log(image, imgDescription, title, children)
    return (//voor de begrijpbaarheid zou ik hier alleen children neerzetten en de variabele
        //content lekker in app.jsx laten (bv plaatjes vs heading en tekst
        //image regel lijkt een boolean expressie te zijn?
        <section>
            {image && <img src={image} alt={imgDescription} />}
            <h2>{title}</h2>
            {children}
        </section>
    );
}

export default Tile;
