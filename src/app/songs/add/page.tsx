"use client";
import { useMutation, useQuery } from "convex/react";
import React, { useState } from "react";
import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";
import { useRouter } from "next/navigation";

const defaultSong = {
  title: "",
  artistId: "" as Id<"artists">,
  lyrics: "",
};

const AddSongPage = () => {
  const addSong = useMutation(api.songs.add);
  const artists = useQuery(api.artists.list, {});
  const router = useRouter();
  const [song, setSong] = useState(defaultSong);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    console.log(name, value);
    setSong((prevSong) => ({
      ...prevSong,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your logic here to handle the form submission
    console.log(song);
    // validate
    await addSong(song);
    setSong(defaultSong);
    router.push("/songs");
  };

  return (
    <div>
      <h1>Add Song</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div>
          <label htmlFor="title">Title:</label>
          <input
            className="text-black p-2"
            type="text"
            id="title"
            name="title"
            value={song.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="artistId">Artist:</label>
          <select
            defaultValue={artists?.[0]?._id}
            name="artistId"
            onChange={handleChange}
            className="text-black p-2"
          >
            <option></option>
            {artists?.map((artist) => (
              <option value={artist._id} key={artist._id}>
                {artist.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="lyrics">Lyrics:</label>
          <textarea
            className="text-black p-2"
            id="lyrics"
            name="lyrics"
            value={song.lyrics}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Song</button>
      </form>
    </div>
  );
};

export default AddSongPage;
