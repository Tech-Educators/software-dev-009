import Image from "next/image";

export default async function CatPage({ params }) {
  // params is something like { catid; "aiv" }
  const response = await fetch(
    `https://api.thecatapi.com/v1/images/${params.catid}`
  );
  const cat = await response.json();

  return (
    <div>
      <h2>Cat Page</h2>
      <p>If you go to / you will see the home page</p>
      <p>If you go to /LITERALLYANYOTHERURL you will see this page</p>
      <p>This is because it is a dynamic route degment called [catid]</p>
      <p>Whatever we put after /, will become catid</p>
      <p>At the moment, the catid has a value of &quot;{params.catid}&quot;</p>
      <p>Behold, the cat with the id of {params.catid}</p>
      <Image
        key={cat.id}
        src={cat.url}
        width={cat.width}
        height={cat.height}
        alt={cat.id} // this is a rubbish alt... naughty boy
      />
    </div>
  );
}
