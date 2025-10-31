import { Link } from "react-router-dom";

function Header() {
    return(
        <header>
            <h1>StudyLink</h1>
            <nav>
                <ul>
                   <li><a href="#">Disciplinas</a></li>
                   <li><a href="#">Matrículas</a></li> 
                   <li><a href="#">Calendário</a></li> 
                   <li><a href="#">Notas</a></li>  
                </ul>
            </nav>
        </header>
    );
    
}

export default Header;  