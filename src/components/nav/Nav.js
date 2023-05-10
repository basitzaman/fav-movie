import './Nav.css';
import { useState, useEffect } from 'react';

const Nav = () => {

    const [show, setShow] = useState(false);

    const scrollHandler = () => {
        if (window.scrollY > 10) {
            setShow(true);
        } else setShow(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        }
    }, [])

    return( 
    <nav style={{backgroundColor: show ? 'rgb(20,20,20)' : 'transparent',}}>
        <section>
            <div className="nav_left">
                <div className="nav_links">
                        <a href='#'>MY Favorite Movies</a>
                        <a href='#sim'>Similar Movies</a>
                    </div>
                </div>
        </section>
    </nav>
    )
}

export default Nav;