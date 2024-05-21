export default function Home({ searchParams }) {
  console.log(searchParams);

  return (
    <div>
      <h2>Home</h2>
      <p>
        Below I am stringifying my search params so I can just print them onto
        the page.
      </p>
      <p>
        Please note, stringifying searchParams is just to we can see it on the
        page, we don&apos;t normally do this
      </p>
      <h3>searchParams</h3>
      <pre>{JSON.stringify(searchParams)}</pre>
      <h3>Use Cases</h3>
      <p>Query params are useful for:</p>
      <ul>
        <li>
          Sharing urls with extra settings such as sorting/filtering on an
          ecommerce website
        </li>
        <li>
          Authentication app often use searchParams - have you ever been sent a
          link to sign in to a website? That link had searchParams int he url
          with your unique login information
        </li>
      </ul>
    </div>
  );
}

/*

base url
https://blog.com

with query parameter of sort
https://blog.com?sort=desc

with 2 query parameters, sort and filter
https://blog.com?sort=desc&filter=tech

query params always come to you as an object
each key value pair in the url is a key value pair in the object

so our above searchParams will look like this:
{
  sort: "desc",
  filter: "tech"
}

*/

// https://blog.com/authenticate?hash=df9s8d6fduyfh2e7dce8v287hcech2&user=wollivan
