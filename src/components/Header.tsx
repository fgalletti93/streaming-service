import { ReactElement } from "react";
import { Link } from "react-router-dom";

const Header = (): ReactElement => {
  return (
    <div className="ui secondary pointing menu">
      <Link to={'/'} className="item">StreamMe</Link>
      <div className="right menu">
        <Link to={'/'} className="item">All Streams</Link>
      </div>
      </div>
  )
}

export default Header