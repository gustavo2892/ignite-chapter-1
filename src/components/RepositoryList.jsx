import { useState, useEffect } from 'react';

import { RepositoryItem } from './RepositoryItem';
import '../styles/repositories.scss';

// https://api.github.com/orgs/rocketseat/repos

const repository = {
  name: 'unform',
  description: 'Forms in React',
  link: 'https://github.com/unform/unform'
}

export function RepositoryList() {
  const [respositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [])

  console.log('Esse é o respositories => ', respositories);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}