import styled from "styled-components";
import CorrectIcon from "./assets/images/icon-success.svg";
import { useGlobalContext } from "./context";
const Modal = () => {
  const { setShow, email } = useGlobalContext();
  return (
    <Wrapper>
      <div className="modal">
        <div className="img-container">
          <img src={CorrectIcon} alt="Correct Icon " />
        </div>
        <h3>Thanks for subscribing!</h3>
        <p>
          A confirmation email has been sent to <strong>{email}</strong>. Please
          open it and click the button inside to confirm your subscription.
        </p>
        <button className="btn" onClick={() => setShow(false)}>
          Dismiss message
        </button>
      </div>
    </Wrapper>
  );
};
export default Modal;
const Wrapper = styled.main`
  background-color: hsl(234, 29%, 20%);
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 222;
  .modal {
    background: white;
    max-width: 40vw;
    min-height: 50vh;
    padding: 3rem;
    border-radius: 2rem;
  }
  .img-container {
    margin-bottom: 2rem;
  }
  h3 {
    font-weight: 700;
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  p {
    line-height: 1.4rem;
    margin-bottom: 4rem;
  }
  @media (max-width: 768px) {
    .modal {
      background: white;
      max-width: 100vw;
      min-height: 100vh;
      padding: 3rem;
      border-radius: 0;
    }
    .img-container {
      margin-top: 5rem;
      margin-bottom: 2rem;
    }
    p {
      margin-bottom: 15rem;
    }
  }
`;
