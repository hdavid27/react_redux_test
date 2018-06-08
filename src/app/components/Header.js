import React from 'react';

//stateless component
export const Header = (props) => {
    return (
        <nav className="col-lg-12 navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className = "navbar-nav mr-auto" id="navbarNav">
                    <li className = "nav-item"><a className="nav-link" href="#">{props.homeLink}</a></li>
                    <li className = "nav-item"><a className="nav-link" href="#">User</a></li>
                </ul>
            </div> 
        </nav>
    );
};

//statefull component
// export class Header extends React.Component {
//     render () {
//         return (
//             <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                 <div className="collapse navbar-collapse">
//                     <ul className = "navbar-nav mr-auto" id="navbarNav">
//                         <li className = "nav-item"><a className="nav-link" href="#">Home</a></li>
//                     </ul>
//                 </div> 
//             </nav>
//         );
//     }
// }