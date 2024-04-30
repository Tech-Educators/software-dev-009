async function fetchArtworks() {
  const artworks = await fetch("http://localhost:8080/artworks");
  let result = await artworks.json();
  return result;
}
export const artworksData = await fetchArtworks();
