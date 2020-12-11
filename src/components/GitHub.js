import { useState } from 'react';
import axios from 'axios';

import GitHubResults from './GitHubResults';

function GitHub() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `https://api.github.com/users/${username}`;
    axios
      .get(url)
      .then((result) => {
        console.log(result.data);
        setUser(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Find a GitHub User</h1>
        {user ? <GitHubResults user={user} /> : null}
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input type="submit" value="Find" />
      </form>
    </div>
  );
}

export default GitHub;
