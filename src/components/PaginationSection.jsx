import React from "react";
import { cn, Pagination, PaginationItemType } from "@nextui-org/react";
import { IoChevronBackSharp } from "react-icons/io5";
import { IoChevronForwardSharp } from "react-icons/io5";

export default function PaginationSection({ pages, page }) {
    const renderItem = ({
        ref,
        key,
        value,
        isActive,
        onNext,
        onPrevious,
        setPage,
        className,
    }) => {
        if (value === PaginationItemType.NEXT) {
            return (
                <button
                    key={key}
                    className={cn(className, "bg-[#751269] min-w-9 w-9 h-9")}
                    onClick={onNext}
                >
                    <IoChevronForwardSharp size={22} className='text-white' />
                </button>
            );
        }

        if (value === PaginationItemType.PREV) {
            return (
                <button
                    key={key}
                    className={cn(className, "bg-[#751269] min-w-9 w-9 h-9")}
                    onClick={onPrevious}
                >
                    <IoChevronBackSharp size={22} className='text-white' />
                </button>
            );
        }

        if (value === PaginationItemType.DOTS) {
            return (
                <button
                    key={key}
                    className={`${className} text-white tracking-widest`}
                >
                    ...
                </button>
            );
        }

        // cursor is the default item
        return (
            <button
                key={key}
                ref={ref}
                className={`text-white border-1 border-gray-500 rounded-full ${cn(
                    className,
                    isActive && " bg-[#45103f] font-bold"
                )}`}
                onClick={() => setPage(value)}
            >
                {value}
            </button>
        );
    };

    return (
        <Pagination
            disableCursorAnimation
            showControls
            total={pages}
            initialPage={page}
            className='mt-8 flex justify-center border-2 border-gray-500 rounded-full mx-auto w-[90%] lg:w-[70%] md:w-[80%]'
            radius='md'
            renderItem={renderItem}
            variant='light'
        />
    );
}
