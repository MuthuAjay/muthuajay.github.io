import { useState, useEffect } from 'react';

export interface GitHubStats {
  contributions: number;
  repositories: number;
  pullRequests: number;
  loading: boolean;
  error: string | null;
}

const useGitHubStats = (username: string): GitHubStats => {
  const [stats, setStats] = useState<GitHubStats>({
    contributions: 0,
    repositories: 0,
    pullRequests: 0,
    loading: true,
    error: null
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Fetch user data and public repos count
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        if (!userResponse.ok) throw new Error('Failed to fetch user data');
        const userData = await userResponse.json();
        
        // Get repositories count
        const repoCount = userData.public_repos;

        // Fetch events to calculate contributions and PRs
        // Note: This only provides the last ~90 days of activity due to API limitations
        const eventsResponse = await fetch(`https://api.github.com/users/${username}/events/public`);
        if (!eventsResponse.ok) throw new Error('Failed to fetch events data');
        const eventsData = await eventsResponse.json();
        
        // Count contributions (PushEvents contain commits)
        let contributionCount = 0;
        // Count pull requests
        let pullRequestCount = 0;
        
        eventsData.forEach((event: any) => {
          if (event.type === 'PushEvent' && event.payload.commits) {
            contributionCount += event.payload.commits.length;
          }
          if (event.type === 'PullRequestEvent') {
            pullRequestCount++;
          }
        });
        
        // For better estimate, we can multiply by 4 to approximate a year's worth
        // This is a rough estimate since the API only gives ~90 days
        contributionCount = contributionCount * 4;
        pullRequestCount = pullRequestCount * 4;
        
        setStats({
          contributions: contributionCount,
          repositories: repoCount,
          pullRequests: pullRequestCount,
          loading: false,
          error: null
        });
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        setStats({
          ...stats,
          loading: false,
          error: error instanceof Error ? error.message : 'Unknown error'
        });
      }
    };

    fetchStats();
  }, [username]);

  return stats;
};

export default useGitHubStats;