

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import idenHillsLogo from '../img/id -01.png';

// Styled component for the Navbar
const NavbarContainer = styled.nav`
  width: 100%;
  background-color: #1a202c; /* Tailwind bg-gray-800 */
  padding: 1rem 2rem; /* Tailwind p-4 */

  @media (max-width: 820px) {
    padding: 0rem; /* Adjust padding for smaller screens */
  }
`;

const NavbarContent = styled.div`
  max-width: 1200px;
  margin: 0 auto; /* Centered with Tailwind mx-auto */
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 820px) {
    padding: 0 1rem; /* Adjust padding for smaller screens */
  }

  @media (max-width: 425px) {
    flex-direction: column; /* Stack items vertically */
    align-items: center; /* Align items to the center */
  }
`;

const NavbarLogo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 5rem; /* Adjust height as needed */

  margin-bottom: 0.5rem; /* Tailwind mb-2 */

  @media (max-width: 425px) {
    margin-bottom: 0; /* Remove bottom margin on smaller screens */
  }
`;

const LogoText = styled.span`
  color: #ffffff; /* Tailwind text-white */
  font-size: 1.5rem; /* Tailwind text-xl */
  margin-left: 0.75rem; /* Tailwind ml-3 */

  @media (max-width: 425px) {
    margin-left: 0; /* Remove left margin on smaller screens */
    margin-top: 0.5rem; /* Add top margin for spacing */
  }
`;

const NavbarLinks = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  @media (max-width: 425px) {
    margin-top: 1rem; /* Add top margin for spacing */
  }
`;

const NavbarLinkItem = styled.li`
  margin-right: 1rem; /* Tailwind space-x-4 */
  margin-bottom: 0; /* Remove default bottom margin */

  &:not(:last-child) {
    margin-right: 1rem; /* Space between each link */
  }

  @media (max-width: 425px) {
    margin-right: 0; /* Remove right margin on smaller screens */
    margin-bottom: 0.5rem; /* Add bottom margin for spacing */
  }
`;

const NavLink = styled(Link)`
  color: #ffffff; /* Tailwind text-white */
  transition: color 0.3s ease;

  &:hover {
    color: #cbd5e0; /* Tailwind hover:text-gray-300 */
  }
`;

const LogoutButton = styled.button`
  color: #ffffff; /* Tailwind text-white */
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: color 0.3s ease;
  font-size: 1.2rem; /* Tailwind text-lg */

  &:hover {
    color: #cbd5e0; /* Tailwind hover:text-gray-300 */
  }
`;

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Handle logout logic here
    navigate('/');
  };

  return (
    <NavbarContainer>
      <NavbarContent>
        <NavbarLogo>
          <LogoImage src={idenHillsLogo} alt="IdenHills" />
          <LogoText>IdenHills</LogoText>
        </NavbarLogo>
        <NavbarLinks>
          <NavbarLinkItem>
            <NavLink to="/Follow-ups">Follow Up</NavLink>
          </NavbarLinkItem>
          <NavbarLinkItem>
            <NavLink to="/Create Staff">Create Staff</NavLink>
          </NavbarLinkItem>
          <NavbarLinkItem>
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
          </NavbarLinkItem>
        </NavbarLinks>
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar;
