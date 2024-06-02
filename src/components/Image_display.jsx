import { useState } from "react";
import React from "react";
import axios from "axios";

function Image_display() {
  const [text, setText] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [imageCode, setImageCode] = useState("")

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const fetchImage = async () => {
    console.log("clicked button");
    try {
      const response = await axios.post(
        "https://6bb8-34-125-31-98.ngrok-free.app/generate-diagram",
        {
          text,
        }
      );

      const { image_url, image_code} = response.data; // Extract image URL from the response
      console.log(response.data)
      setImageURL(image_url);
      setImageCode(image_code)
    } catch (error) {
      console.error("Error fetching diagram:", error);
    }
  };

  return (
    <div className="flex flex-col">
      <p className="text-white m-4 font-bold leading-none tracking-tight">
        Enter a brief description of the scenario you have in mind. We will
        display your scenario as a plantUML diagram
      </p>
      {/* <div className="flex flex-row"> */}
        <input
          className="px-4 py-4 pt-4 pb-4 mr-4 ml-4 mx-4 my-4  w-[400px] h-auto resize-vertical overflow-hidden rounded-md tracking-tight"
          type="text"
          value={text}
          onChange={handleTextChange}
          placeholder="Enter Scenario here"
        />
        <button
          className="px-2 py-2 m-4 text-black font-bold bg-gray-50  hover:bg-gray-400 rounded-md justify-center w-fit"
          onClick={fetchImage}
        >
          Generate Image
        </button>
      {/* </div> */}
      <h3 className="text-white text-2xl font-bold mx-4 my-4">PlantUML Code</h3>
      <div className="flex flex-row">
      <p className="mx-4 my-4 text-white font-bold"><pre>{imageCode}</pre></p>
      {imageURL && (
        <img
          className="m-4 h-auto max-w-full rounded-lg"
          src={imageURL}
          alt="Fetched from server "
          style={{ maxWidth: "400px", maxHeight: "400px" }}
        />
      )}
      </div>
    </div>
  );
}

export default Image_display;
