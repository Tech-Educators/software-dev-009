-- just for demo purposes, this will need to be run in either vercel postgres or supabase
CREATE TABLE profiles (
    id SERIAL PRIMARY KEY,
    clerk_id TEXT,
    username TEXT,
    bio TEXT
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES profiles(id),
    content TEXT
);
