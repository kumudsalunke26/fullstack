import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { usePostEpisode } from "../api/EpisodeApi"; // Assuming you have an API hook for posting episodes

// Define the Zod schema
const episodeSchema = z.object({
    title: z.string().min(1, "Title is required"),
    category: z.string().min(1, "Category is required"),
    duration: z.string().min(1, "Duration is required"), // Changed to string
    thumbnailImage: z.instanceof(File, "Thumbnail is required"),
    EpisodeUrl: z.string().min(1, "Episode URL is required"),
});

const AddEpisodePage = () => {
    const { postEpisode, loading } = usePostEpisode();

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(episodeSchema),
    });

    const onSubmit = (data) => {
        // Convert duration and volume to numbers
        data.duration = Number(data.duration);
        data.volume = Number(data.volume);

        const formData = new FormData();
        for (const key in data) {
            formData.append(key, data[key]);
        }
        postEpisode(formData);
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
                    Duration
                </label>
                <input
                    type='text'
                    {...register("duration")}
                    className='mt-1 block w-full border border-secondary rounded-md shadow-sm bg-background text-mainText p-2'
                />
                {errors.duration && (
                    <p className='text-red-500 text-sm'>
                        {errors.duration.message}
                    </p>
                )}
            </div>

            <div>
                <label className='block text-sm font-medium text-mainText'>
                    Episode URL
                </label>
                <input
                    type='text'
                    {...register("EpisodeUrl")}
                    className='mt-1 block w-full border border-secondary rounded-md shadow-sm bg-background text-mainText p-2'
                />
                {errors.EpisodeUrl && (
                    <p className='text-red-500 text-sm'>
                        {errors.EpisodeUrl.message}
                    </p>
                )}
            </div>
            <div>
                <label className='block text-sm font-medium text-mainText'>
                    Thumbnail
                </label>
                <input
                    type='file'
                    onChange={(e) => handleImageChange(e, "thumbnailImage")}
                    className='mt-1 block w-full border border-secondary rounded-md shadow-sm bg-background text-mainText p-2'
                />
                {errors.thumbnail && (
                    <p className='text-red-500 text-sm'>
                        {errors.thumbnail.message}
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

export default AddEpisodePage;
