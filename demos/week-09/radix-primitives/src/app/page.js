import { LockOpen2Icon, CrossCircledIcon } from "@radix-ui/react-icons";
import AccordionDemo from "./components/Accordion";
import PopoverDemo from "./components/Popover";

export default function Home() {
  return (
    <main>
      <p>
        This is an icon <LockOpen2Icon /> within a p tag <CrossCircledIcon />
      </p>
      <AccordionDemo />
      <PopoverDemo />
    </main>
  );
}
