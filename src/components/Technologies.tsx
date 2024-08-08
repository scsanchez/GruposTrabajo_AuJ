import "./Technologies.css";
import reactIcon from "/icons/react.svg";
import gitIcon from "/icons/git.svg";
import githubIcon from "/icons/github.svg";
import htmlIcon from "/icons/html.svg";
import cssIcon from "/icons/css.svg";
import typescriptIcon from "/icons/typescript.svg";
import javascriptIcon from "/icons/javascript.svg";

const techIcons = [
  { name: "html", image: htmlIcon },
  { name: "css", image: cssIcon },
  { name: "javascript", image: javascriptIcon },
  { name: "typescript", image: typescriptIcon },
  { name: "react", image: reactIcon },
  { name: "git", image: gitIcon },
  { name: "github", image: githubIcon },
];

export const Technologies = () => {
  return (
    <>
      {" "}
      <div className="tech-container">
        <h1>¿Cuales son las tecnologías que utilizo para el diseño Front?</h1>

        {techIcons.map((logo, index) => (
          <div key={index} className="card">
            <img src={logo.image} alt={logo.name} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Technologies;
