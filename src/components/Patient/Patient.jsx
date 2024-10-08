import PropTypes from "prop-types";

const Patient = ({ patient }) => {
  const { nombre, propietario, fecha, sintomas, telefono } = patient;
  return (
    <div className="bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold text-[#010101] text-left">
        Nombre: &nbsp;
        <span className="font-normal">{nombre}</span>
      </p>
      <p className="font-bold text-[#010101] text-left">
        Propietario: &nbsp;
        <span className="font-normal">{propietario}</span>
      </p>
      <p className="font-bold text-[#010101] text-left">
        Teléfono: &nbsp;
        <span className="font-normal">{telefono}</span>
      </p>
      <p className="font-bold text-[#010101] text-left">
        Fecha: &nbsp;
        <span className="font-normal">{fecha}</span>
      </p>
      <p className="font-bold text-[#010101] text-left">
        Síntomas: &nbsp;
        <span className="font-normal">{sintomas}</span>
      </p>
    </div>
  );
};

Patient.propTypes = {
  patient: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    propietario: PropTypes.string,
    fecha: PropTypes.string,
    sintomas: PropTypes.string,
    telefono: PropTypes.string,
  }).isRequired,
};

export default Patient;
