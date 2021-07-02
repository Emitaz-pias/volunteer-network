import React from "react";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

const naval = 2;
const AddEvents = () => {
  const [imageURL, setImageURL] = useState();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const eventData = { name: data.name, img: imageURL };
    const url = "http://localhost:8080/addEvent";
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(eventData),
    });
  };

  const handleImageUpload = (event) => {
    console.log("file is ", event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "1b155e7e761be44367daaf7b9b9d5a06");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    // habi jabi

    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="name" defaultValue="excting event" {...register("name")} />
        <br />
        <input type="file" onChange={handleImageUpload} />
        <br />
        <input type="submit" />
        <br />
      </form>
    </div>
  );
};

export default AddEvents;
S;
