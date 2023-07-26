import Form from "./Form";
import Modal from "./Modal";
import { useGlobalContext } from "./context";

function App() {
  const { show } = useGlobalContext();
  return (
    <>
      {show && <Modal />}
      <Form />
    </>
  );
}

export default App;
