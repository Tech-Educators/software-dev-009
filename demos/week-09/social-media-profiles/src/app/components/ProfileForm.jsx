import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export default function ProfileForm() {
  const { userId } = auth();
  async function handleUpdateProfile(formData) {
    "use server";
    const username = formData.get("username");

    await db.query(
      `UPDATE profiles SET username = '${username}' WHERE clerk_id = '${userId}'`
    );
    revalidatePath("/");
  }

  return (
    <div>
      <h2>Update Profile</h2>
      <p>Welcome to TimTalk, please choose your username!</p>
      <form action={handleUpdateProfile}>
        <input name="username" placeholder="Username" />
        <button>Submit</button>
      </form>
    </div>
  );
}
