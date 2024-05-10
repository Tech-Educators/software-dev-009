import { sql } from "@vercel/postgres";
import Image from "next/image";
import Link from "next/link";

export default async function Froguins() {
  const froguins = await sql`SELECT * FROM froguins`;

  return (
    <div>
      <h2>All Froguins</h2>
      {froguins.rows.map((froguin) => {
        return (
          <Link href={`/froguins/${froguin.id}`} key={froguin.id}>
            <h3>{froguin.name}</h3>
            <p>{froguin.description}</p>
            <Image
              src={`/${froguin.name}.png`}
              alt={froguin.name}
              width={300}
              height={300}
            />
          </Link>
        );
      })}
    </div>
  );
}
