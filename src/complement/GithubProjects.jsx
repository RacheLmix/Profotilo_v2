import { useEffect, useState } from "react";
import "../styles/GithubProjects.css";

const GithubProjects = () => {
  const [repos, setRepos] = useState([]);

  const username = "0xcRachel";

  const [currentPage, setCurrentPage] = useState(1);
  const reposPerPage = 6;

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${username}/repos`);
        const data = await res.json();

        const sorted = data.sort((a, b) => b.stargazers_count - a.stargazers_count);

        setRepos(sorted);
      } catch (err) {
        console.error("GitHub API error:", err);
      }
    };

    fetchRepos();
  }, []);

  /* pagination logic */

  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;

  const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);

  const totalPages = Math.ceil(repos.length / reposPerPage);

  return (
    <div className="github-container">
      <h2 className="github-title">My GitHub Projects</h2>

      <div className="repo-grid">
        {currentRepos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="repo-card"
          >
            <h3>{repo.name}</h3>

            <p>
              {repo.description
                ? repo.description
                : "No description provided"}
            </p>

            <div className="repo-info">
              <span>⭐ {repo.stargazers_count}</span>
              <span>🍴 {repo.forks_count}</span>
            </div>
          </a>
        ))}
      </div>

      {/* Pagination */}

      <div className="pagination">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={currentPage === i + 1 ? "active-page" : ""}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

    </div>
  );
};

export default GithubProjects;
