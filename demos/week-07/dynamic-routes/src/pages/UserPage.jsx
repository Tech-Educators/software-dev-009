import { useParams, Outlet, Link } from "react-router-dom";

export default function UserPage() {
  // useParams() is a function that returns an object. Lets destructure the username proprty from it!
  const { username } = useParams();

  return (
    <div>
      <h2>User Page</h2>
      <nav>
        <Link to={`/users/${username}`}>User</Link>
        <Link to={`/users/${username}/posts`}>Posts</Link>
        <Link to={`/users/${username}/likes`}>Likes</Link>
      </nav>
      <p>{username} is pottentially the most handsome human being ever.</p>

      <Outlet />
    </div>
  );
}
