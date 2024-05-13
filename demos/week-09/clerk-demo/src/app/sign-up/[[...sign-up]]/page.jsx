import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div>
      <h2>
        Welcome to the website, you can sign up here with this prebuilt clerk
        sign up component
      </h2>
      <p>
        This is just an example of creating your own sign up page. The sign in
        page is what clerk gives us by default.
      </p>
      <SignUp />
    </div>
  );
}
