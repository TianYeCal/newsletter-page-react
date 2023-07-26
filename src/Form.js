import styled from "styled-components";
import formImg from "./assets/images/illustration-sign-up-desktop.svg";
import CorrectIcon from "./assets/images/icon-list.svg";
import { useState } from "react";
import { useGlobalContext } from "./context";

const Form = () => {
  const { setShow, setEmail } = useGlobalContext();
  const [error, setError] = useState("");
  // eslint-disable-next-line no-useless-escape
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const [emailAddress, setEmailAddress] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailAddress) return setError("please input email address");
    else setError("");
    if (!emailAddress.match(mailformat))
      return setError("Please input correct email address");
    setEmail(emailAddress);
    setShow(true);
    setEmailAddress("");
    setError(false);
  };

  return (
    <Wrapper>
      <section className="form-section">
        <div className="form-content">
          <h2 className="title form-title">Stay updated!</h2>
          <p className="sub-title">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <div className="features">
            <div className="single-feature">
              <div className="img-container">
                <img src={CorrectIcon} alt="correct icon" />
              </div>
              <p className="single-feature-content">
                Product discovery and building what matters
              </p>
            </div>
            <div className="single-feature">
              <div className="img-container">
                <img src={CorrectIcon} alt="correct icon" />
              </div>
              <p className="single-feature-content">
                Measuring to ensure updates are a success
              </p>
            </div>
            <div className="single-feature">
              <div className="img-container">
                <img src={CorrectIcon} alt="correct icon" />
              </div>
              <p className="single-feature-content">And much more!</p>
            </div>
          </div>
          <form className="form-control" onSubmit={handleSubmit}>
            <div className="form-detail">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <p className="error-msg">{error}</p>
            </div>
            <input
              className={error ? "form-input errorRed" : "form-input"}
              type="text"
              id="email"
              placeholder="email@company.com"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
            />
            <button className="btn" type="submit">
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>
        <div className="form-img">
          <img src={formImg} alt="formImg desktop" className="img" />
        </div>
      </section>
    </Wrapper>
  );
};
export default Form;
const Wrapper = styled.main`
  background-color: hsl(234, 29%, 20%);
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  .form-section {
    width: 90vw;
    max-width: var(--fixed-width);
    background: var(--white);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-2);
    padding: 2rem 2.5rem;
    margin: 3rem auto;
    display: flex;
    align-items: center;
    gap: 2rem;
    border-radius: 1rem;
    min-height: 60vh;
    max-width: 60vw;
  }
  .form-title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }
  .form-content {
    width: 70%;
  }
  .sub-title {
    line-height: 1.4rem;
    margin-bottom: 2rem;
  }
  .single-feature {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin: 1rem;
    margin-left: 0;
  }
  .features {
    margin-bottom: 2rem;
  }
  .form-label {
    font-weight: 700;
  }
  .form-input {
    padding: 1rem;
    background: transparent;
    margin-bottom: 1rem;
  }
  .error-msg {
    color: red;
  }
  .form-detail {
    display: flex;
    justify-content: space-between;
  }
  .errorRed {
    color: red;
    border: solid 1px red;
    background: lightRed;
  }
  @media (max-width: 768px) {
    background: transparent;
    .form-section {
      background: var(--white);
      box-shadow: var(--shadow-2);
      border-radius: 1rem;
      display: flex;
      flex-direction: column-reverse;
      /* height: 100vh; */
      width: 100vw;
      min-height: 100vh;
      padding: 0;
      max-width: 100vw;
      min-height: 100vh;
      margin-top: 0;
      position: relative;
      margin: 0;
    }
    .form-img {
      width: 100vw;
      height: 30vh;
      position: absolute;
      top: -10%;
      left: 0;
    }
    .img {
      height: 50vh;
    }
    .form-content {
      height: 60vh;
      width: 100vw;
      padding: 1rem;
    }
  }
`;
