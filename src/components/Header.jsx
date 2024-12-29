import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import PrimaryButton from "./PrimaryButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Set the tab title based on the page
  useEffect(() => {
    const pathName = location.pathname;

    switch (pathName) {
      case "/episodes":
        document.title = "Journey-Story | Episodes";
        break;
      case "/blogs":
        document.title = "Journey-Story | Blogs";
        break;
      case "/stories":
        document.title = "Journey-Story | Stories";
        break;
      case "/reviews":
        document.title = "Journey-Story | Reviews";
        break;
        case "/admin":
        document.title = "Journey-Story | Admin";
        break;
      case "/about":
        document.title = "Journey-Story | About Us";
        break;
      case "/team":
        document.title = "Journey-Story | Our Team";
        break;
      default:
        document.title = "Journey-Story";
        break;
    }
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const menuItems = [
    { label: "Episodes", toLink: "/episodes" },
    { label: "Blogs", toLink: "https://blogs.journeystory.in" },
    { label: "Stories", toLink: "http://localhost:5174/" },
    { label: "About us", toLink: "#about" },
    { label: "Team", toLink: "#team" },
    { label: "Reviews", toLink: "/reviews" },
  ];

  const handleNavigation = (toLink) => {
    if (toLink.startsWith("http")) {
      // For external links, use window.location.href to navigate within the same tab
      window.location.href = toLink;
    } else if (toLink.startsWith("#")) {
      navigate("/" + toLink);
    } else {
      navigate(toLink);
    }
    setIsMenuOpen(false);
  };

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      className="bg-transparent"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              loading="lazy"
              className="w-28 h-[100%]"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-12" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem
            key={`${item.label}-${index}`}
            className="cursor-pointer"
            onClick={() => handleNavigation(item.toLink)}
          >
            <span className="text-white">{item.label}</span>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <PrimaryButton text="Contact us" toLink="/contact-us" />
      </NavbarContent>
      <NavbarMenu className="bg-background bg-opacity-50">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            {item.toLink.startsWith("http") ? (
              <span
                className="w-full text-mainText"
                size="lg"
                onClick={() => handleNavigation(item.toLink)}
              >
                {item.label}
              </span>
            ) : (
              <Link
                className="w-full text-mainText"
                to={item.toLink}
                size="lg"
                onClick={() => handleNavigation(item.toLink)}
              >
                {item.label}
              </Link>
            )}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
