-- I am not running any code here, I'm just using this to store my seed queries
-- (because vercel postgres query editor sucks)

CREATE TABLE froguins (
    id SERIAL PRIMARY KEY,
    name TEXT,
    description TEXT
);

INSERT INTO froguins (name, description) VALUES
('Edwina', 'Very good girl our Edwina is.'),
('Tarquin', 'Tarquin is probably a baddy. We haven&apos;t figured it out yet'),
('Targuin', 'Targuin is probably going to defeat Tarquin one day. We haven&apos;t figured it out yet'),
('Pingu', 'Pingu is a maniac. He taught kids how to be naughty.');