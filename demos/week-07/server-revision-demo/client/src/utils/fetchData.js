//fetch data from server endpoint
async function fetchArtlist() {
  const artList = await fetch("http://localhost:8080/artlist");
  let result = await artList.json();
  return result;
}
export const artlistData = await fetchArtlist();
