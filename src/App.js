import { useState } from "react";
import axios from "axios";

function App() {
  const [customerInfo, setCustomerInfo] = useState("");

  const onHandleCustomerInfo = (e) => {
    setCustomerInfo(e.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    console.log(customerInfo);
    getInfoCustomer();
  };

  const getInfoCustomer = async () => {
    const headers = {
      Accept: "*/*",
      Authorization: "Bearer 96Cfdw22yIEOWdqXuDiV2CtaUnZv7crynzcpgYTg",
    };

    const response = await axios.get(
      "https://webservices.ec/api/cedula/" + customerInfo,
      { headers: headers }
    );
    console.log(response);
  };

  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <input
          name="customerId"
          placeholder="Cédula"
          onChange={onHandleCustomerInfo}
        />
        <button>Enviar</button>
      </form>
    </div>
  );
}

export default App;
