import './App.css'
import Button from "./components/Button.jsx";
import bag1 from './assets/bag_1.png'
import bag2 from './assets/bag_2.png'
import bag3 from './assets/bag_3.png'
import bag4 from './assets/bag_4.png'
import brand from './assets/brand.png'
import our_story from './assets/our_story.png'
import Product from "./components/Product.jsx";
import Tile from "./components/Tile.jsx";

function App() {
    return (<>

            <h1>Handbags & Purses</h1>

            <nav>
                <Button text="to the collection" disabled={false}/>
                <Button text="shop all bags" disabled={false}/>
                <Button text="pre-orders" disabled={true}/>
            </nav>
            <main>
            <Product label="Best seller" image={bag1} imageAlt="bag1" nameOfBag="The handy bag" price="400"/>
            <Product label="Best seller" image={bag2} imageAlt="bag2" nameOfBag="The stylish bag" price="250"/>
            <Product label="New collection" image={bag3} imageAlt="bag3" nameOfBag="The simple bag" price="300"/>
            <Product label="New collection" image={bag4} imageAlt="bag4" nameOfBag="The trendy bag" price="150"/>
            </main>

            <footer>
                <Tile title="The brand">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum enim excepturi, fuga pariatur praesentium quia sequi similique sunt.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum enim excepturi, fuga pariatur praesentium quia sequi similique sunt.</p>
                </Tile>
                <Tile image={brand} imageDescription="The brand logo" />
                <Tile image={our_story} imageDescription="The designers" />
                <Tile title="Our story">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis eligendi exercitationem illo, labore laboriosam nihil omnis praesentium. Aspernatur cum deleniti excepturi itaque, laboriosam nisi rerum sunt. At repellendus tenetur veniam!</p>
                </Tile>
            </footer>
        </>
    )
}

export default App
