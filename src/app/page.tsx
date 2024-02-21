"use client";
import { useQuery } from "convex/react";
import Image from "next/image";
import { api } from "../../convex/_generated/api";

export default function Home() {
  const songs = useQuery(api.songs.list, {})
  console.log(songs)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 text-white">
          {songs?.map((song) => (
            <li key={song._id} className="flex flex-col items-center">
              <h2 className="text-xl font-bold">{song.title}</h2>
              <p className="text-sm">{song.artist}</p>
            </li>
          ))}
          </ol>
      </div>
    </main>
  );
}
