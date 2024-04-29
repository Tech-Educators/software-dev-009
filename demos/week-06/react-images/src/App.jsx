import reactLogo from "./assets/react.svg"; // this file is saved in the src/assets directory
import viteLogo from "/vite.svg"; // this file is saved in the public directory

function App() {
  return (
    <>
      <h2>
        If an image is not needed for your app to compile (for example favicon)
      </h2>
      <h2>
        If you need to image to be in a component and compiled with the rest of
        your app, put it in src
      </h2>
      <p>This image is imported above the component from the src directory</p>
      <img src={reactLogo} alt="React logo" />
      <p>
        This image is imported above the component from the public directory
      </p>
      <img src={viteLogo} alt="Vite logo" />
      <p>This image is NOT imported and the file path is used from src</p>
      <img src="./assets/react.svg" alt="React logo but no import" />
      <p>This image is NOT imported and the file path is used from public</p>
      <img src="/vite.svg" alt="Vite logo but no import" />
      <p>You should use the public directory</p>
    </>
  );
}

export default App;
