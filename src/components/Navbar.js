import { Link } from 'react-router-dom'
const Navbar = () => {
    const categories = ['Home', 'Nosotros', 'Contacto', 'Gato', 'Veterinaria'];

    return ( <
        nav >
        <
        div >
        <
        h1 > My App < /h1>  <
        ul > {
            categories.map((category, index) => ( <
                li key = { index } >
                <
                Link to = { "/${category.toLowerCase()} " } > { category } < /Link>   <
                /li >
            ))
        } <
        /ul>  < /
        div > <
        /nav>
    );
}
export default Navbar;