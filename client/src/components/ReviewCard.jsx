import { User } from "@nextui-org/react";

const ReviewCard = ({ review }) => {
    return (
        <div className='flex flex-col justify-between gap-4 w-full md:min-w-[300px] p-3 shadow-sm bg-gradient-to-b from-primary to-background min-h-[450px] min-w-[200px]'>
            <div className='text-mainText font-semibold text-md p-2'>

                {review.category}
            </div>
            <div className='text-md font-semibold text-mainText'>
                {review.content}
            </div>
            <User
                name={review.user.name}
                description={review.user.description}
                className='flex items-start gap-2 text-lg w-full'
                avatarProps={{
                    src: review.user.avatar,
                    alt: review.user.name,
                    className: "rounded-full",
                }}
            />
        </div>
    );
};

export default ReviewCard;
