import React from 'react';
import { Link } from 'react-router-dom';

//stateless component
export const Header = (props) => {

    let homeLink = props.homeLink;
    
    if(!homeLink){
        homeLink = "Home"
    }

    return (
        <nav className="col-lg-12 navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className = "navbar-nav mr-auto" id="navbarNav">
                    <li className = "nav-item"><Link className="nav-link" to="/">{homeLink}</Link></li>
                    <li className = "nav-item"><Link className="nav-link" to="/home">Home2</Link></li>
                    <li className = "nav-item"><Link className="nav-link" to={"/user/" + 10}>User</Link></li>
                    <li className = "nav-item"><Link className="nav-link" to={"/posts"}>Posts</Link></li>
                </ul>
            </div> 
        </nav>
    );
};

//statefull component
// export class Header extends React.Component {
//     render () {
//         return (
//             <nav className="col-lg-12 navbar navbar-expand-lg navbar-light bg-light">
//                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className = "navbar-nav mr-auto" id="navbarNav">
//                         <li className = "nav-item"><Link className="nav-link" to="/">{this.props.homeLink}</Link></li>
//                         <li className = "nav-item"><Link className="nav-link" to="/user">User</Link></li>
//                     </ul>
//                 </div> 
//             </nav>
//         );
//     }
// }