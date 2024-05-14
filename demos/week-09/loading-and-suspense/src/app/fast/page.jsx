import FlashingThing from "@/components/FlashingThing";
import SlowComponent from "@/components/SlowComponent";
import { Suspense } from "react";

export default function SlowPage() {
  return (
    <div>
      <h2>Fast Page</h2>
      <p>
        This page is going to load the entire content EXCPET the SlowComponent
      </p>
      <p>This is because the SlowComponent is in suspense</p>
      <Suspense fallback={<FlashingThing />}>
        <SlowComponent />
      </Suspense>
      <p>I am underneath the slow thing</p>
    </div>
  );
}
