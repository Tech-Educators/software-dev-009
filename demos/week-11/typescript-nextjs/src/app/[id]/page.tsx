// This is an alternative way of declaring the type of our params
// type idParams = {
//     params: { id: string }
// }
// export default function DynamicRoute({ params }: idParams) {

export default function DynamicRoute({ params }: { params: { id: string } }) {
  return (
    <div>
      <h2>Funky Dynamic Route</h2>
      <p>
        This is every page expect the home page, because we put our dymanic
        route segment of [id] in /app
      </p>
      <p>
        If we go to /tim, or /jez we will see this page, and &quot;tim&quot; or
        &quot;jez&quot; will be in our params
      </p>
      <p>At the moment the params.id is {params.id}</p>
    </div>
  );
}
