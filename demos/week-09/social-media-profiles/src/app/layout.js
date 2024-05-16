import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import "./globals.css";
import { db } from "@/lib/db";
import ProfileForm from "./components/ProfileForm";

export default async function RootLayout({ children }) {
  // Get the userId from auth() -- if null, the user is not signed in
  const { userId } = auth(); // user_98sddfiusdfi7syf  or null

  const profiles = await db.query(
    `SELECT * FROM profiles WHERE clerk_id = '${userId}'`
  );

  // if the user is logged in AND they don't have an entry in the profiles table, add it
  if (profiles.rowCount === 0 && userId !== null) {
    // add them to our database
    await db.query(`INSERT INTO profiles (clerk_id) VALUES ('${userId}')`);
  }

  // has username will be true if we have a username and (shockingly) false if we don't
  const hasUsername = profiles.rows[0]?.username !== null ? true : false;

  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          <main>
            <SignedOut>{children}</SignedOut>

            <SignedIn>
              {hasUsername && children}
              {!hasUsername && <ProfileForm />}
            </SignedIn>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
