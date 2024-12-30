
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const PublishStory = () => {
  const [newStory, setNewStory] = useState({
    title: "",
    content: "",
  });

  const [fileName, setFileName] = useState("No file selected");
  const [imageUrl, setImageUrl] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate();
  const { logout, publishStory } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newStory.title || !newStory.content) {
      alert("Please fill in all fields before submitting.");
      return;
    }
    try {
      const data = { imageUrl, title: newStory.title, content: newStory.content };
      await publishStory(data);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting story:", error);
      alert("Failed to submit the story. Please try again.");
    }
  };

  const handleLogout = async () => {
    try {
      const response = await logout();
      if (response.success) {
        console.log("message:", response.message);
        navigate("/login");
      } else {
        console.log("message:", response.message);
        alert(response.message);
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      setFileName("No file selected");
      return;
    }

    setFileName(file.name); // Update file name when a file is selected

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImageUrl(reader.result);
    };
    reader.onerror = () => {
      alert("Failed to upload image. Please try again.");
    };
  };

  return (
 

    <div className="bg-black min-h-screen flex items-center justify-center pb-[50rem] pt-[2rem]">
  <div className="min-h-full bg-white p-8 rounded-lg shadow-lg w-[80rem] sm:w-[90%] xs:w-[95%] max-w-[100%]">
    <h2 className="text-2xl font-bold mb-4 flex items-center text-black">Publish a New Story</h2>
    {isSubmitted ? (
      <p className="text-green-600 text-lg">Story submitted for review!</p>
    ) : (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Headline"
          value={newStory.title}
          onChange={(e) =>
            setNewStory({ ...newStory, title: e.target.value })
          }
          className="w-full mb-4 p-2 border rounded placeholder:border-opacity-60 text-black"
        />
        <textarea
          placeholder="Content"
          value={newStory.content}
          onChange={(e) =>
            setNewStory({ ...newStory, content: e.target.value })
          }
          className="w-full h-[22rem] mb-4 p-2 border rounded placeholder:border-opacity-60 text-black"
        />
        <div className="w-[100px]">
          {imageUrl ? (
            <img src={imageUrl} className="h-full object-cover" alt="Preview" />
          ) : (
            <p className="text-gray-900 text-sm">No image selected</p>
          )}
        </div>
        <div className="flex items-center gap-4 my-2">
          <input
            type="file"
            id="file-input"
            style={{ display: "none" }} // Hide the default input
            onChange={handleImageUpload}
          />
          <label
            htmlFor="file-input"
            style={{
              cursor: "pointer",
              padding: "10px",
              background: "lightblue",
              borderRadius: "5px",
            }}
          >
            Upload File
          </label>
          <p className="text-black">{fileName}</p> {/* Display selected file name */}
        </div>
        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 w-44"
          >
            Publish
          </button>
          <button
            type="button"
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 w-44"
            onClick={handleLogout}
          >
            LOGOUT
          </button>
        </div>
      </form>
    )}
  </div>
</div>

  );
};

export default PublishStory;
