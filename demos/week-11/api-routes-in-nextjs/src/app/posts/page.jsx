import Image from "next/image";

export default async function Posts() {
  const res = await fetch("http://localhost:3000/api/posts");
  const data = await res.json();

  return (
    <div>
      <h2>Posts</h2>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <h3>
              {item.name} ({item.year})
            </h3>
            <Image src={item.imgUrl} alt={item.name} width={300} height={300} />
          </div>
        );
      })}
    </div>
  );
}
