import React, { useEffect, useState } from "react";
import "./Projects.css";

const userName = "scsanchez";

export const getRepositoriesByUserName = (userName) => {
  const repositoriesURL = `https://api.github.com/users/${userName}/repos`;

  return fetch(repositoriesURL).then(onResponse).catch(onError);
};

const onResponse = (response) => {
  if (!response.ok) {
    throw Error(response.status);
  }
  return response.json();
};

const onError = (error) => {
  console.error("Looks like there was a problem: ", error);
};

export const Projects = () => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    getRepositoriesByUserName(userName)
      .then((data) => setRepositories(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="centered-container">
        <h1>Mis repositorios de GitHub:</h1>
        <div>
          <ul>
            {repositories.map((repo) => (
              <p key={repo.id}>
                {repo.name}{" "}
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repo.html_url}
                </a>
              </p>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Projects;
