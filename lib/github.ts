export interface GitHubRepo {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  topics: string[]
  created_at: string
  updated_at: string
  pushed_at: string
}

export interface GitHubUser {
  login: string
  name: string
  bio: string | null
  public_repos: number
  followers: number
  following: number
  avatar_url: string
}

const GITHUB_USERNAME = 'mustafayamin'
const GITHUB_API_BASE = 'https://api.github.com'

export async function fetchGitHubUser(): Promise<GitHubUser | null> {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}`, {
      next: { revalidate: 3600 } // Cache for 1 hour
    })
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`)
    }
    
    return await response.json()
  } catch (error) {
    console.error('Error fetching GitHub user:', error)
    return null
  }
}

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=10`,
      {
        next: { revalidate: 3600 } // Cache for 1 hour
      }
    )
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`)
    }
    
    const repos = await response.json()
    
    // Filter out forks and sort by stars/activity
    return repos
      .filter((repo: GitHubRepo) => !repo.name.includes('fork'))
      .sort((a: GitHubRepo, b: GitHubRepo) => {
        // Sort by stars first, then by last updated
        if (b.stargazers_count !== a.stargazers_count) {
          return b.stargazers_count - a.stargazers_count
        }
        return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
      })
      .slice(0, 6) // Show top 6 projects
  } catch (error) {
    console.error('Error fetching GitHub repos:', error)
    return []
  }
}