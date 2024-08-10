import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

const PrimaryButton = ({ text, toLink }) => {
    return (
        <Button
            variant='bordered'
            radius='full'
            className='bg-blue-700 hover:bg-blue-900 text-white font-bold'
        >
            <Link to={toLink}>{text}</Link>
        </Button>
    );
};

export default PrimaryButton;
