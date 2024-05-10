import { sql } from "@vercel/postgres";
import Image from "next/image";
import Link from "next/link";

export default async function SingleFroguin({ params }) {
  const result = await sql`SELECT * FROM froguins WHERE id = ${params.id}`;
  const froguin = result.rows[0]; // SELECT returns an object with a rows proberty, which is an array of our results

  return (
    <div>
      <h2>{froguin.name}</h2>
      <p>{froguin.description}</p>
      <Image
        src={`/${froguin.name}.png`}
        alt={froguin.name}
        width={300}
        height={300}
      />
      <Link href={`/froguins/${params.id}/edit`}>Edit</Link>
    </div>
  );
}
