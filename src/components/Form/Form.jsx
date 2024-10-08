import { useState } from "react";
import PropTypes from "prop-types";
import Error from "../Error";

const Form = ({ setPatients }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [telefono, setTelefono] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      nombre.trim() === "" ||
      propietario.trim() === "" ||
      telefono.trim() === "" ||
      fecha.trim() === "" ||
      sintomas.trim() === ""
    ) {
      setError(true);
      return;
    }

    setError(false);
    const objectPatient = {
      nombre,
      propietario,
      telefono,
      fecha,
      sintomas,
    };
    setPatients((prev) => [...prev, objectPatient]);
    console.log(objectPatient);
  };

  return (
    <div className="flex-1">
      <form onSubmit={handleSubmit}>
        {error && (
          <Error>
            <p>Todos los campos son obligatorios</p>
          </Error>
        )}
        <div className="mt-6">
          <label className="text-left block mb-1" htmlFor="nombre">
            Nombre Mascota
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Name"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="border border-solid border-[#f1f1f1] h-[48px] w-full text-left px-4"
          />
        </div>
        <div className="mt-6">
          <label className="text-left block mb-1" htmlFor="propietario">
            Nombre Propietario
          </label>
          <input
            type="text"
            id="propietario"
            name="propietario"
            placeholder="Owner"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
            className="border border-solid border-[#f1f1f1] h-[48px] w-full text-left px-4"
          />
        </div>
        <div className="mt-6">
          <label className="text-left block mb-1" htmlFor="telefono">
            Teléfono
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            placeholder="Phone"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            className="border border-solid border-[#f1f1f1] h-[48px] w-full text-left px-4"
          />
        </div>
        <div className="mt-6">
          <label className="text-left block mb-1" htmlFor="fecha">
            Fecha
          </label>
          <input
            type="date"
            id="fecha"
            name="fecha"
            placeholder="Date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className="border border-solid border-[#f1f1f1] h-[48px] w-full text-left px-4"
          />
        </div>
        <div className="mt-6">
          <label className="text-left block mb-1" htmlFor="sintomas">
            Síntomas
          </label>
          <textarea
            id="sintomas"
            name="sintomas"
            placeholder="Symptoms"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
            className="border border-solid border-[#f1f1f1] w-full text-left px-4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-[#6366f1] text-white px-4 py-2 mt-8"
        >
          Agregar Cita
        </button>
      </form>
    </div>
  );
};
Form.propTypes = {
  setPatients: PropTypes.func.isRequired,
};

export default Form;
