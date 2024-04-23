import TreeCard from "./Components/TreeCard";
import UseState from "./Components/UseState";
import Monkey from "./Components/Monkey";

export default function App() {
  return (
    <div>
      <h1 className="heading">Cool Trees!</h1>
      <UseState />
      <div className="card-container">
        <TreeCard
          treeName="Juniper"
          location="Arizona"
          imgLink="https://www.treehugger.com/thmb/zwxswuxD6cPGAEdUJRi4LyuyE58=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-946028290-0a3e92ad30be42fc90c74d223f15267b.jpg"
        />
        <TreeCard
          treeName="Boabab"
          location="Africa"
          imgLink="https://media.cntraveller.com/photos/611bf4e3628f4910ed102938/master/w_1600%2Cc_limit/gettyimages-1281090177.jpg"
        />
      </div>
      <Monkey />
    </div>
  );
}
