import "./Technologies.css";
import reactIcon from "/icons/react.svg";
import gitIcon from "/icons/git.svg";
import githubIcon from "/icons/github.svg";
import htmlIcon from "/icons/html.svg";
import cssIcon from "/icons/css.svg";
import typescriptIcon from "/icons/typescript.svg";
import javascriptIcon from "/icons/javascript.svg";

const techIcons = [
  { name: "react", image: reactIcon },
  { name: "git", image: gitIcon },
  { name: "github", image: githubIcon },
  { name: "html", image: htmlIcon },
  { name: "css", image: cssIcon },
  { name: "typescript", image: typescriptIcon },
  { name: "javascript", image: javascriptIcon },
];

export const Technologies = () => {
  return (
    <>
      <div className="tech-container">
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