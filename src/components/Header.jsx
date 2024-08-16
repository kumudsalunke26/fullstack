import logo from "../assets/logo.png";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
} from "@nextui-org/react";
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
                        <img src={logo} alt='Logo' className='w-28 h-[100%]' />
                    </Link>
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
        </Navbar>
    );
};

export default Header;
