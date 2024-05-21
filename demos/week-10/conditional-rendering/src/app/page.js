import Modal from "@/components/modal";

export default function Home() {
  const data = { name: "Tim", age: 29 };

  return (
    <div>
      <h2>Home</h2>
      {data.age > 25 && <p>{data.name} is over 25</p>}
      {true && <Modal />}
    </div>
  );
}
