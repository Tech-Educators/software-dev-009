import { createContext, useState } from "react";

// here we are creating our context that the user will use later
export const CookieContext = createContext(0);

// here we are creating our provider )the thing that wraps around our whole App)
export function CookieProvider({ children }) {
  // declare our state variables as normal, but within the provider itself
  const [cookies, setCookies] = useState(0);

  function incrementCookies() {
    setCookies(cookies + 1);
  }

  // we are returning our Provider so we can use this around our App, and giving values that we want the children to be able to access
  return (
    // CookieContext.Provider is a property of our Context from line 4
    <CookieContext.Provider value={{ cookies, incrementCookies }}>
      {/* children is whatever component we are looking at that is wrapped inside our provider */}
      {/* in our case its App.jsx */}
      {children}
    </CookieContext.Provider>
  );
}
