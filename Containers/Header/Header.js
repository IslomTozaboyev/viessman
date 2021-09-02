import {
  faBars,
  faExpandArrowsAlt,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Drawer, List } from "@material-ui/core";
import React from "react";
import HeaderWrapper from "./HeaderWrapper";
import Link from "next/link";
import { headerList, headerPages, Pages } from "../../Data/datas";
import { useRouter } from "next/dist/client/router";
import ListWrapper from "../../Wrappers/listWrapper";

const Header = () => {
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = () => (
    <ListWrapper>
      <List>
        <div className="sidebar_res d-flex justify-content-center align-items-center">
          <ul className="my-4 d-flex ">
            {headerPages.map((v) => (
              <li
                className={`mb-3 px-3 ms-2 ${
                  router.pathname === v.href ? "active" : ""
                }`}
                key={v.href}
              >
                <Link href={v.href}>
                  <a className="item d-flex align-items-center">
                    <div className="icon rounded ">{v.icon}</div>
                    <p className="ms-3 mb-0"> {v.title}</p>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="container links">
          <div className="row">
            {headerList.map((value, index) => {
              return (
                <div className="col-12 col-sm-12 col-md-8 col-lg-4">
                  <div className="my-4" key={index}>
                    <h3 className="fw-bold">{value.title}</h3>
                    <ul>
                      {value.links.map((value, index) => {
                        return (
                          <li className="list my-3" key={index}>
                            <Link className="link" href={value}>
                              <a>{value.link}</a>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </List>
    </ListWrapper>
  );

  const router = useRouter();
  return (
    <HeaderWrapper>
      <div className="d-flex justify-content-between align-items-center px-5">
        <div>
          <Link href="/">
            <a>
              <img
                className="logo"
                src="https://viessmann.vercel.app/images/viessman%20logo.png"
                alt="rasm"
              />
            </a>
          </Link>
        </div>
        <div className="d-flex align-items-center text-white d-none d-xl-flex">
          <ul className="menu_navbar">
            {Pages.map((value, index) => {
              return (
                <li key={value.title} className="navbar_link">
                  <Link href={value.href}>
                    <a className="navbar_link">
                      <FontAwesomeIcon className="me-2" icon={value.icon} />
                      {value.title}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="text-white">
            <Button className="text-white btnn">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
            <Button className="text-white btnn">
              <FontAwesomeIcon icon={faBars} />
            </Button>
          </div>
        </div>
        <div className="d-block d-xl-none">
          {["top"].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}>
                <FontAwesomeIcon className="text-white " icon={faBars} />
              </Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
