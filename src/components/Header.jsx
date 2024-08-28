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
        { label: "Blogs", toLink: "/blogs" },
        { label: "About us", toLink: "#about" },
        { label: "Team", toLink: "#team" },
        { label: "Reviews", toLink: "/reviews" },
    ];

    const handleNavigation = (toLink) => {
        if (toLink.startsWith("#")) {
            navigate("/" + toLink);
        } else {
            navigate(toLink);
        }
    };

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className='bg-transparent'>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className='sm:hidden'
                />
                <NavbarBrand>
                    <Link to='/'>
                    <img
              src={logo}
              alt="Logo"
              loading="lazy"
              className="w-28 h-[100%]"
            />                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className='hidden sm:flex gap-12' justify='center'>
                {menuItems.map((item, index) => (
                    <NavbarItem
                        key={`${item.label}-${index}`}
                        className='cursor-pointer'
                        onClick={() => handleNavigation(item.toLink)}
                    >
                        <span className='text-white'>{item.label}</span>
                    </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarContent justify='end'>
                <PrimaryButton text='Contact us' toLink='/contact-us' />
            </NavbarContent>
            <NavbarMenu className='bg-background bg-opacity-50'>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item.label}-${index}`}>
                        <Link
                            className='w-full text-mainText'
                            to={item.toLink}
                            size='lg'
                            onClick={() => handleNavigation(item.toLink)}
                        >
                            {item.label}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
};

export default Header;
