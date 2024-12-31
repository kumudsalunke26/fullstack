import React from "react";
import { cn, Pagination, PaginationItemType } from "@nextui-org/react";
import { IoChevronBackSharp } from "react-icons/io5";
import { IoChevronForwardSharp } from "react-icons/io5";

export default function PaginationSection({ pages, page, setPage }) {
  const renderItem = ({ ref, key, value, isActive, className }) => {
    if (value === PaginationItemType.NEXT) {
      return (
        page < pages && (
          <button
            key={key}
            className={cn(className, "min-w-9 w-9 h-9")}
            onClick={() => setPage(page + 1)}>
            <IoChevronForwardSharp size={22} className="text-mainText" />
          </button>
        )
      );
    }

    if (value === PaginationItemType.PREV) {
      return (
        page > 1 && (
          <button
            key={key}
            className={cn(className, "min-w-9 w-9 h-9")}
            onClick={() => setPage(page - 1)}>
            <IoChevronBackSharp size={22} className="text-mainText" />
          </button>
        )
      );
    }

    if (value === PaginationItemType.DOTS) {
      return (
        <button
          key={key}
          className={`${className} text-mainText tracking-widest`}>
          ...
        </button>
      );
    }

    // cursor is the default item
    return (
      <button
        key={key}
        ref={ref}
        className={`text-mainText border-1 border-secondary rounded-full ${cn(
          className,
          isActive && " bg-primary font-bold"
        )}`}
        onClick={() => setPage(value)}>
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
      className="mt-8 flex justify-center border-2 border-gray-500 rounded-full mx-auto w-[90%] lg:w-[70%] md:w-[80%]"
      radius="md"
      renderItem={renderItem}
      variant="light"
    />
  );
}
