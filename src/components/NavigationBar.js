

 function NavigationBar() {
    return(
        <div className='container'>
            <div className='navbar navbar-expand-sm justify-content-between'>
                <div className='d-flex'>
                <a href="#"><img src="/assets/icons/burger.svg" alt=""/></a>
                <a href="#"><img src="/assets/icons/TechnoCorp_Logo2 1.svg" alt=""/></a>

                <ul className="navbar-nav">
                    <li className="nav-item"><a href="#" className='nav-link'>Xizmatlar</a></li>
                    <li className="nav-item"><a href="#" className='nav-link'>Loyihalar</a></li>
                    <li className="nav-item"><a href="#" className='nav-link'>Biz haqimizda</a></li>
                    <li className="nav-item"><a href="#" className='nav-link'><img src="/assets/icons/player.svg" alt=""/></a></li>
                </ul>
                </div>
                <div>
                    <a href="+998 (71) 299-86-88" className='number'>+998 (71) 299-86-88</a>
                    <a href="#"><img src="/assets/icons/search.svg" alt=""/></a>
                    <button type="button" className='btn'>Savol berish</button>
                </div>
                
            </div>

        </div>
    )
}
 export default NavigationBar;