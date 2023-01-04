import { FC, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/images/logo.svg";
import settings from "../../assets/icons/settings.svg";
import logout from "../../assets/icons/logout.svg";
import notifications from "../../assets/icons/notifications.png";
import downwards from "../../assets/icons/downward_arrow.svg";
import avatar from "../../assets/images/avatar.svg";
import Icon from "../Icon/Icon";
import SearchBar from "../SearchBar/SearchBar";
import Typography from "../Typography/Typography";
import OptionsModal from "../OptionModal/OptionModal";
import HorizontalFlexWithIcon from "../UI/FlexItem/HorizontalFlexWithIcon";
import styles from "./Header.module.scss";
import Sidebar from "./Sidebar";

const Header: FC<{}> = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [openMenu, setOpenMenu] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  useEffect(() => {
    let userEmail = localStorage.getItem("user");
    if (userEmail) {
      setUserEmail(JSON.parse(userEmail).email);
    }
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <Link to="/">
          <img src={logo} alt="lendsqr logo" />
        </Link>
      </div>

      <div className={styles.headerLeft}>
        <div className={styles.headerSearch}>
          <SearchBar placeholder="Search for anything" data={[]} />
        </div>
        <div className={styles.headerProfile}>
          <Link to="/docs">
            <Typography text="Docs" element="h5" />
          </Link>
          <div className={styles.headerNotifications}>
            <Icon src={notifications} />
          </div>
          <div className={styles.headerProfileDetails}>
            <img
              src={avatar}
              className={styles.headerProfileAvatar}
              alt="user avatar"
            />
            <Typography
              text={userEmail.slice(0, 25).split("@")[0]}
              element="h5"
            />
            <Icon src={downwards} onClick={() => setOpenOptions(true)} />

            <OptionsModal
              style={{ top: "15px", boxShadow: "unset", right: 0 }}
              open={openOptions}
              close={() => setOpenOptions(false)}
              options={[
                <HorizontalFlexWithIcon
                  text="Settings"
                  title
                  icon={settings}
                  onClick={() => {}}
                />,
                <HorizontalFlexWithIcon
                  text="Logout"
                  title
                  icon={logout}
                  onClick={() => handleLogout()}
                />,
              ]}
              onOptionsChange={() => {}}
            />
          </div>
        </div>
      </div>
      <FaBars
        className={styles.menuNav}
        onClick={() => setOpenMenu(true)}
        data-testid="menu-button"
      />
      <Sidebar
        close={() => setOpenMenu(false)}
        open={openMenu}
        logout={handleLogout}
      />
    </header>
  );
};

export default Header;
