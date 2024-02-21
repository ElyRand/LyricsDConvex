import convexClient from "@/utils/convexClient";
import { api } from "../../../../convex/_generated/api";
import { redirect } from "next/navigation";

export default function AddArtistPage() {
  const create = async (formData: FormData) => {
    "use server";
    if (!formData.get("name")) throw new Error("Name is required");
    await convexClient.mutation(api.artists.add, {
      name: formData.get("name") as string,
    });
    redirect("/");
  };

  return (
    <div>
      <h1>Add Artist</h1>
      <form action={create}>
        <label>
          Artist:
          <input className="text-black" type="text" name="name" />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
