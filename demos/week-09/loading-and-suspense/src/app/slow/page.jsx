import SlowComponent from "@/components/SlowComponent";

export default function SlowPage() {
  return (
    <div>
      <h2>Slow Page</h2>
      <p>This page loads after the SlowComponent finishes loading</p>
      <p>Before then we see the loading.jsx file</p>
      <p>So NONE of this page is seen until its all ready!</p>
      <SlowComponent />
    </div>
  );
}
