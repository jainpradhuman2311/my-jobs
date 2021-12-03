import "./ForgotPassword.css";
const ForgotPassword = () => {
  return (
    <div className="forgot-form">
      <p className="forgot-text">Forgot Your Password?</p>
      <form>
        <p>
          Enter the email associated with your account and we’ll send you
          instructions to reset your password.
        </p>
        <div>
          <label>Email Address</label>
          <input type="email" />
        </div>
        <center>
          <button className="forgot-btn" type="submit">
            Submit
          </button>
        </center>
      </form>
    </div>
  );
};

export default ForgotPassword;
