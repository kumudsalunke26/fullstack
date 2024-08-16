import logo from "../assets/logo.png";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const menuItems = [
        { label: "Episodes", toLink: "/episodes" },
        { label: "Blogs", toLink: "/blogs" },
        { label: "About us", toLink: "/about" },
        { label: "Team", toLink: "/hosts" },
        { label: "Reviews", toLink: "/reviews" },
        { label: "Add Blogs", toLink: "/addblog" },
    ];
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
                    >
                        <Link to={item.toLink} className='text-white'>
                            {item.label}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarContent justify='end'>
                <PrimaryButton text='Contact us' toLink='/contact-us'>
                    Contact Us
                </PrimaryButton>
            </NavbarContent>
            <NavbarMenu className='bg-background bg-opacity-50'>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item.label}-${index}`}>
                        <Link
                            className='w-full text-mainText'
                            to={item.toLink}
                            size='lg'
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
