import './App.css'
import Button from "./components/Button.jsx";
import bag1 from './assets/bag_1.png'
import Product from "./components/Product.jsx";
import bag2 from './assets/bag_2.png'
import bag3 from './assets/bag_3.png'
import bag4 from './assets/bag_4.png'
import brand from './assets/brand.png'
import our_story from './assets/our_story.png'
import Tile from "./components/Tile.jsx";

function App() {
    return (<>
            <h1>Handbags & Purses</h1>
            <nav>{/*opdracht 1*/}
                <Button text="to the collection" disabled={false}/>
                <Button text="shop all bags" disabled={false}/>
                <Button text="pre-orders" disabled={true}/>
            </nav>
            {/*opdracht 2*/}
            <main>
                <Product
                    tag="Best Seller"
                    image={bag1}
                    name = "The handy bag "
                    price ="400"/>

                <Product
                    tag="Best Seller"
                    image={bag2}
                    name = "The stylish bag "
                    price ="250"/>
                <Product
                    tag="New collection"
                    image={bag3}
                    name = "The simple bag "
                    price ="300"/>
                <Product
                    tag="New collection"
                    image={bag4}
                    name = "The trendy bag "
                    price ="150"/>
            </main>
            <footer>
                <Tile>
                    <h2>the brand</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad expedita inventore ipsam laudantium nesciunt repudiandae!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, voluptates.</p>
                </Tile>
                <Tile>
                     <img src={brand} alt="brand"/>
                </Tile>
                <Tile>
                    <img src={our_story} alt="our_story"/>
                </Tile>
                <Tile>
                    <h2>Our story</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cumque deserunt illum modi natus nobis odio porro ratione! Aut blanditiis culpa fugit iste itaque iure libero perspiciatis qui voluptate? Amet aspernatur assumenda, at consequuntur eligendi harum iste quos similique tempora!</p>
                </Tile>
            </footer>

        </>
    )
}

export default App
