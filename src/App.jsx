import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import PatientList from "./components/PatientList";
import { useEffect, useState } from "react";

function App() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    console.log(patients, "se actualizo los paciente");
  }, [patients]);
  return (
    <>
      <Header />
      <div className="flex max-w-[1240px] mx-auto mt-12 gap-x-[32px]">
        <Form setPatients={setPatients} />
        <PatientList patients={patients} />
      </div>
    </>
  );
}

export default App;
