import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function SingleFroguin({ params }) {
  const result = await sql`SELECT * FROM froguins WHERE id = ${params.id}`;
  const froguin = result.rows[0]; // SELECT returns an object with a rows proberty, which is an array of our results

  async function editFroguin(formData) {
    "use server";
    const name = formData.get("name");
    const description = formData.get("description");

    await sql`UPDATE froguins SET name=${name}, description=${description} WHERE id = ${params.id}`;

    revalidatePath("/froguins");
    revalidatePath(`/froguins/${params.id}`);

    redirect(`/froguins/${params.id}`);
  }

  return (
    <div>
      <form action={editFroguin}>
        <label>Name</label>
        <input
          name="name"
          placeholder="Froguin Name"
          defaultValue={froguin.name}
        />

        <label>Description</label>
        <textarea
          name="description"
          placeholder="Description"
          defaultValue={froguin.description}
          rows={5}
        ></textarea>

        <button>Submit Changes</button>
      </form>
    </div>
  );
}
