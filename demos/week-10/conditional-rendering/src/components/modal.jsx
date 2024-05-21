import Image from "next/image";

export default function Modal() {
  return (
    <div className="modal">
      <Image
        src="/otter.jpeg"
        width={300}
        height={300}
        alt="The cutest darn otter you ever did see!"
      />
    </div>
  );
}
