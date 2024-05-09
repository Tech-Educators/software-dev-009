import { sql } from "@vercel/postgres";

export default async function Home() {
  const froguins = await sql`SELECT * FROM froguins`;

  return (
    <div className="home-container">
      <h2>Home</h2>
      <div>
        {froguins.rows.map((froguin) => {
          return (
            <div key={froguin.name} className="froguin-item">
              <h3>{froguin.name}</h3>
              <p>{froguin.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
