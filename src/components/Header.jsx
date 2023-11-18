import reactLogo from '../assets/react.svg'
import Categories from '../components/Categories'

function Header() {
    return (
        <>
            <div className="navbar-header brand">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </div>
            <div className="main">
                <Categories/>
            </div>
        </>

    )
}

export default Header;