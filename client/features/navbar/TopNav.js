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
          <MDBNavbarBrand href="/home">
            <img
              src="
          LogoForNav.png"
              alt="PocketNYC logo"
              width="auto"
              height="70"
            />
        
          </MDBNavbarBrand>

          {isLoggedIn && (
            <MDBNavbarBrand href="/calendar">
              <CalendarMonthIcon />
            </MDBNavbarBrand>
          )}

          <MDBNavbarBrand href="/faq">
            <HelpIcon />
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}
