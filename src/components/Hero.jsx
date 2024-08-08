import heroImage from "../assets/hero.png";
const Hero = () => {
    return (
        <div className='w-full mt-8'>
            <img src={heroImage} className='object-cover' alt='Hero' />
        </div>
    );
};

export default Hero;
