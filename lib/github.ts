import { GITHUB_USERNAME } from './constants';

export async function getGithubStats() {
  const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
    next: { revalidate: 3600 },
  });

  return res.json();
}
