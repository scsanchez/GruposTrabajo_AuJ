import { useEffect, useState } from "react";
import "./Projects.css";

interface Repository {
  id: number;
  name: string;
  html_url: string;
}

const userName = "scsanchez";

export const getRepositoriesByUserName = (userName: string) => {
  const repositoriesURL = `https://api.github.com/users/${userName}/repos`;

  return fetch(repositoriesURL).then(onResponse).catch(onError);
};

const onResponse = (response: any) => {
  if (!response.ok) {
    throw Error(response.status);
  }
  return response.json();
};

const onError = (error: any) => {
  console.error("Looks like there was a problem: ", error);
};

export const Projects = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    getRepositoriesByUserName(userName)
      .then((data) => setRepositories(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div>
        <h1 className="title">Mis repositorios de GitHub:</h1>
        <div className="centered-container">
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
