import "./Reset.css";
const Reset = () => {
  return (
    <div className="reset-form">
      <p className="reset-text">Reset your password</p>
      <form>
        <p>Enter your password below</p>
        <div>
          <label>Password</label>
          <input type="password" />
        </div>
        <div>
          <label>Confirm Password</label>
          <input type="password" />
        </div>

        <center>
          <button className="reset-btn" type="submit">
            Reset
          </button>
        </center>
      </form>
    </div>
  );
};

export default Reset;
