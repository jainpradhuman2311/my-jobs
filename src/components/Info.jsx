import "./Info.css";

const infoDetails = [
  {
    title: "Get more visibility",
    subTitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "Organize your candidates",
    subTitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "Verify their abilities",
    subTitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
];

const Info = () => {
  return (
    <div className="info">
      <p className="info-text">why Us</p>
      <div className="info-cards">
        {infoDetails.map((detail) => {
          return (
            <div className="info-card">
              <p className="info-title">{detail.title}</p>
              <p className="info-subtitle">{detail.subTitle}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Info;
