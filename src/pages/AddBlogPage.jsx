import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { usePostBlog } from "../api/BlogApi";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

// Define the Zod schema
const blogSchema = z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    content: z.string().min(1, "Content is required"),
    category: z.string().min(1, "Category is required"),
    author: z.string().min(1, "Author is required"),
    authorProfession: z.string().min(1, "Author Profession is required"),
    authorImage: z.instanceof(File, "Author Image is required"),
    blogImage: z.instanceof(File, "Blog Image is required"),
});

const AddBlogPage = () => {
    const { postBlog, loading } = usePostBlog();

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(blogSchema),
    });

    const onSubmit = (data) => {
        const formData = new FormData();
        for (const key in data) {
            formData.append(key, data[key]);
        }
        postBlog(formData);
    };

    const handleImageChange = (e, name) => {
        const file = e.target.files[0];
        setValue(name, file);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='space-y-4 bg-background p-6 rounded-md'
        >
            <div>
                <label className='block text-sm font-medium text-mainText'>
                    Title
                </label>
                <input
                    type='text'
                    {...register("title")}
                    className='mt-1 block w-full border border-secondary rounded-md shadow-sm bg-background text-mainText p-2'
                />
                {errors.title && (
                    <p className='text-red-500 text-sm'>
                        {errors.title.message}
                    </p>
                )}
            </div>
            <div>
                <label className='block text-sm font-medium text-mainText'>
                    Description
                </label>
                <textarea
                    {...register("description")}
                    className='mt-1 block w-full border border-secondary rounded-md shadow-sm bg-background text-mainText p-2'
                />
                {errors.description && (
                    <p className='text-red-500 text-sm'>
                        {errors.description.message}
                    </p>
                )}
            </div>
            <div>
                <label className='block text-sm font-medium text-mainText'>
                    Content
                </label>
                <ReactQuill
                    onChange={(value) => {
                        setValue("content", value);
                    }}
                    className='mt-1 block w-full border border-secondary rounded-md shadow-sm bg-background text-mainText'
                />
                {errors.content && (
                    <p className='text-red-500 text-sm'>
                        {errors.content.message}
                    </p>
                )}
            </div>
            <div>
                <label className='block text-sm font-medium text-mainText'>
                    Category
                </label>
                <input
                    type='text'
                    {...register("category")}
                    className='mt-1 block w-full border border-secondary rounded-md shadow-sm bg-background text-mainText p-2'
                />
                {errors.category && (
                    <p className='text-red-500 text-sm'>
                        {errors.category.message}
                    </p>
                )}
            </div>
            <div>
                <label className='block text-sm font-medium text-mainText'>
                    Guest Name
                </label>
                <input
                    type='text'
                    {...register("author")}
                    className='mt-1 block w-full border border-secondary rounded-md shadow-sm bg-background text-mainText p-2'
                />
                {errors.author && (
                    <p className='text-red-500 text-sm'>
                        {errors.author.message}
                    </p>
                )}
            </div>
            <div>
                <label className='block text-sm font-medium text-mainText'>
                    Guest Profession
                </label>
                <input
                    type='text'
                    {...register("authorProfession")}
                    className='mt-1 block w-full border border-secondary rounded-md shadow-sm bg-background text-mainText p-2'
                />
                {errors.authorProfession && (
                    <p className='text-red-500 text-sm'>
                        {errors.authorProfession.message}
                    </p>
                )}
            </div>
            <div>
                <label className='block text-sm font-medium text-mainText'>
                    Author Image
                </label>
                <input
                    type='file'
                    onChange={(e) => handleImageChange(e, "authorImage")}
                    className='mt-1 block w-full border border-secondary rounded-md shadow-sm bg-background text-mainText p-2'
                />
                {errors.authorImage && (
                    <p className='text-red-500 text-sm'>
                        {errors.authorImage.message}
                    </p>
                )}
            </div>
            <div>
                <label className='block text-sm font-medium text-mainText'>
                    Blog Image
                </label>
                <input
                    type='file'
                    onChange={(e) => handleImageChange(e, "blogImage")}
                    className='mt-1 block w-full border border-secondary rounded-md shadow-sm bg-background text-mainText p-2'
                />
                {errors.blogImage && (
                    <p className='text-red-500 text-sm'>
                        {errors.blogImage.message}
                    </p>
                )}
            </div>
            {loading ? (
                <button
                    type='text'
                    className='mt-4 bg-primary text-mainText py-2 px-4 rounded-md'
                >
                    Loading...
                </button>
            ) : (
                <button
                    type='submit'
                    className='mt-4 bg-primary text-mainText py-2 px-4 rounded-md'
                >
                    Submit
                </button>
            )}
        </form>
    );
};

export default AddBlogPage;
