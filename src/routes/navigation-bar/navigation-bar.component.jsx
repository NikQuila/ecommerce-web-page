import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "./navigation-bar.styles.scss";

const NavigationBar = () => {
  return (
    // fragment se usa cuando en un div no quieren renderear nada y quiero agrupar a todos y no se muestra en el inspector
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/signIn">
            Sign In
          </Link>
        </div>
      </div>
      {/* El outel es pa cuando uso nested routes, es donde quiere que vayan los childs de este componente */}
      <Outlet></Outlet>
    </Fragment>
  );
};

export default NavigationBar;
