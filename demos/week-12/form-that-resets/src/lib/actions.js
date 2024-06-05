"use server";

export async function formAction(formData) {
  const message = formData.get("message");
  console.log(message);
}
