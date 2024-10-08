import PropTypes from "prop-types";
import Patient from "../Patient/Patient";

const PatientList = ({ patients }) => {
  console.log(patients);
  return (
    <div className="flex-1">
      {patients.length > 0 ? (
        <>
          <h3>Listado de pacientes</h3>
          <p>
            Administra tus{" "}
            <span className="text-[#6366f1]">Pacientes y Citas</span>
          </p>
          <div>
            {patients &&
              patients.map((patient, index) => (
                <Patient key={index} patient={patient} />
              ))}
          </div>
        </>
      ) : (
        <h2>No hay pacientes</h2>
      )}
    </div>
  );
};

PatientList.propTypes = {
  patients: PropTypes.array.isRequired,
};

export default PatientList;
