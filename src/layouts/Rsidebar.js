import { Link } from 'react-router-dom';
import '../styles/WithSidebar.css';

/* create WithSidebar Layout component */
const Rsidebar = (props) => {

    return(
        <div className="with-sidebar">
            <div className="ws-content">
            { props.children }

            </div>
            <div className="sidebar">
                <div>
                    <div className="s-facilities s-box">
                        <div className="s-box-header">
                            <h2>Facilities</h2>
                        </div>
                        <div className='s-box-body'>
                            <h5>Top Management</h5>
                            <ul className="s-facilities-list">
                                <li><Link to="#">Sole Administartor</Link></li>
                                <li><Link to="#">Forge and Fabriaction Shop</Link></li>
                                <li><Link to="#">Foundary and Pattern Making Shop</Link></li>
                                <li><Link to="#">Machine and Tools Shop</Link></li>
                                <li><Link to="#">Rubberizing and Vulcanizing Shop</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="s-news-updates s-box">
                        <div className="s-box-header">
                            <h2>News Update</h2>
                        </div>
                        <div className="s-box-body">

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Rsidebar;