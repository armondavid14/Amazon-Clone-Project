import './Header.css'

import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


const Header = () => {
  return (
    <div className="header">
      <a to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </a>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <a className="header__clearlink">
          <div onClick={() => {}} className="header__option">
            {/* <span className="header__optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span> */}
          </div>
        </a>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <a to="/checkout" className="header__clearlink">
          <div className="header__optionBasket">
            <ShoppingCartIcon />

            {/* <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span> */}
          </div>
        </a>
      </div>
    </div>
  );
}

export default Header