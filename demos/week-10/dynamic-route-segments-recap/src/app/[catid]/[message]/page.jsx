import Image from "next/image";

export default async function MessagePage({ params }) {
  console.log(params);
  const response = await fetch(
    `https://api.thecatapi.com/v1/images/${params.catid}`
  );
  const cat = await response.json();

  return (
    <div>
      <h2>Message</h2>
      <p>{params.message}</p>
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
