import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

const PrimaryButton = ({ text, toLink }) => {
    return (
        <Button
            variant='bordered'
            radius='full'
            className='bg-primary text-white font-bold'
        >
            <Link to={toLink} className='w-full text-center'>
                {text}
            </Link>
        </Button>
    );
};

export default PrimaryButton;
