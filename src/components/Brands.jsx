import "./Brands.css";
const logoIcons = [
  "./Images/brandsIcons/logo1.png",
  "./Images/brandsIcons/logo2.png",
  "./Images/brandsIcons/logo3.png",
  "./Images/brandsIcons/logo4.png",
  "./Images/brandsIcons/logo5.png",
  "./Images/brandsIcons/logo6.png",
  "./Images/brandsIcons/logo8.png",
  "./Images/brandsIcons/logo1.png",
  "./Images/brandsIcons/logo9.png",
  "./Images/brandsIcons/logo4.png",
  "./Images/brandsIcons/logo9.png",
  "./Images/brandsIcons/logo2.png",
  "./Images/brandsIcons/logo9.png",
];

const Brands = () => {
  return (
    <div className="brand">
      <p className="brand-text">companies who trust us</p>
      <div className="brand-icons">
        {logoIcons.map((logoIcon) => {
          return (
            <div className="brand-icon">
              <img src={require(`${logoIcon}`).default} alt="logoIcon" />
            </div>
          );
        })}
      </div>
      ;
    </div>
  );
};

export default Brands;
