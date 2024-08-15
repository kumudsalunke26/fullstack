import { User } from "@nextui-org/react";

const BlogTitle = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row gap-4 text-md'>
            <div className='flex flex-col gap-8 w-full md:w-[48%] items-start flex-shrink'>
                <div>
                    <span className='text-primary'>Technology</span>
                    <span className='ml-6 text-mainText'>Feb 2, 2024</span>
                </div>
                <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold'>
                    How to Get Shortlisted by HR at Your Dream Company |
                    Must-Watch Tips | JourneyStory
                </h1>
                <User
                    name='Aryan Gupta'
                    description='Entrepreneur, Miami, FL'
                    avatarProps={{
                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                    }}
                />
                <div>
                    So, you might have heard about human resource leaders. Ever
                    wondered how one starts and manages a career in HR? Today,
                    we have Ms. Khushboo Jain to share her experience and
                    journey with us. She has worked in HR for 16 years, engaging
                    in various HR forums such as recruitment, development, and
                    more. For the past decade, she has been heading HR
                    departments in different companies and has played a crucial
                    role in their growth. Over these 16 years, she has not only
                    laid the foundation for companies to expand but also met and
                    interacted with many new people.
                </div>
            </div>
            <div className='w-full md:w-[48%]'>
                <img
                    src='https://images.pexels.com/photos/3184316/pexels-photo-3184316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                    alt='blog'
                    className='object-cover w-full max-h-[600px] md:w-[300px] md:min-h-[600px] lg:min-h-full lg:w-[800px]'
                />
            </div>
        </div>
    );
};

export default BlogTitle;
