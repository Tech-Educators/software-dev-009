import Image from "next/image";

export default async function Home() {
  console.log();
  const response = await fetch(
    "https://api.thecatapi.com/v1/images/search?limit=15"
  );
  const data = await response.json();

  return (
    <div>
      <h2>Home Page</h2>
      <h3>Look at my magnificent Cats... BEHOLD!</h3>
      <div className="cats">
        {data.map((cat) => {
          return (
            <Image
              key={cat.id}
              src={cat.url}
              width={cat.width}
              height={cat.height}
              alt={cat.id} // this is a rubbish alt... naughty boy
            />
          );
        })}
      </div>
    </div>
  );
}
