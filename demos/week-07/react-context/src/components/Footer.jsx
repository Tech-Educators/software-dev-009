import { useContext } from "react";
import { CookieContext } from "../context/CookieContext";

export default function Footer() {
  const { cookies } = useContext(CookieContext);

  return (
    <footer>
      <p>Man I wish I could see how many cookies we have</p>
      <p>Oh a gift! {cookies}</p>
    </footer>
  );
}
