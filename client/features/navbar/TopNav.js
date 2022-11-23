import React from "react";
import { useSelector } from "react-redux";
import { MDBNavbar, MDBContainer, MDBNavbarBrand } from "mdb-react-ui-kit";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HelpIcon from "@mui/icons-material/Help";

export default function TopNav() {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  return (
    <div>
      <MDBNavbar light bgColor="light">
        <MDBContainer fluid size="sm">
          <MDBNavbarBrand href="/">
            {/* {/* <><a> */} */}
            <img
              src="
          https://i.imgur.com/0wLXpHh.png"
              alt="PocketNYC logo"
              width="65"
              height="70"
            />
            PocketNYC
            {/* {/* </a> */}</> */}
          </MDBNavbarBrand>

          {isLoggedIn ? (
            <MDBNavbarBrand href="/calendar">
              <CalendarMonthIcon />
            </MDBNavbarBrand>
          ) : null}

          <MDBNavbarBrand href="/faq">
            <HelpIcon />
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}
