import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function AddFroguin() {
  async function handleAddFroguin(formData) {
    "use server";

    const name = formData.get("name");
    const description = formData.get("description");

    await sql`INSERT INTO froguins (name, description) values (${name}, ${description})`;

    revalidatePath("/");

    redirect("/");
  }

  return (
    <div className="add-froguin-container">
      <h2>Add Froguins!</h2>
      <form action={handleAddFroguin}>
        <label htmlFor="name">Name</label>
        <input name="name" id="name" placeholder="Name" />
        <label htmlFor="description">Description</label>
        <input name="description" id="description" placeholder="Description" />

        <button type="submit">Add a Froguin!</button>
      </form>
    </div>
  );
}
