import useConsulta from "../../hooks/useConsulta";
import { useLocation } from "react-router-dom";
import useConv from "../../hooks/useConv";
import { useEffect } from "react";
import {useAuth} from "../../hooks/useAuth"; // Importar useAuth para verificar si es administrador

export default function Votacion() {
  const location = useLocation();
  const punto_convocatoria_id = location.state;

  const { obtenerVotos } = useConsulta();
  const { handleSubmitVotacion } = useConv();
  const { user } = useAuth({ middleware: "auth" }); // Obtener el estado de autenticación

  const { data, error, isLoading } = obtenerVotos(punto_convocatoria_id);

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Hubo un error</p>;

  const handleVoto = (integrante_id, tipo_voto_id, voto_id) => {
    const datos = {
      integrante_id,
      tipo_voto_id,
      punto_convocatoria_id,
    };
    handleSubmitVotacion(datos, voto_id ? voto_id : null);
  };

  const renderVoto = (tipo_voto_id) => {
    switch (tipo_voto_id) {
      case 1:
        return "A favor";
      case 2:
        return "En contra";
      case 3:
        return "Abstinencia";
      case 4:
        return "Inasistencia";
      default:
        return "Sin voto";
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Vista de Votaciones</h1>

      {data.data.map((integrante) => (
        <div className="flex items-center mb-4 h-auto" key={integrante.id}>
          <span className="w-1/3 text-sm font-medium text-gray-700">{`${integrante.nombre} ${integrante.apellido_paterno} ${integrante.apellido_materno}`}</span>

          <div className="flex justify-between w-5/12 items-center space-y-10">
            {/* Mostrar el voto actual del integrante */}
            <span className="text-sm">
              {renderVoto(integrante.votacion?.tipo_voto_id)}
            </span>

            {/* Mostrar botones de votación solo para los administradores */}
            {user && user.admin === 1 ? (
              <>
                <button
                  className={`flex flex-col items-center ${
                    integrante.votacion?.tipo_voto_id === 1
                      ? "border-4 border-black p-2 rounded-lg"
                      : ""
                  }`}
                  onClick={() =>
                    handleVoto(integrante.id, 1, integrante.votacion?.id)
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  <p>A favor</p>
                </button>

                <button
                  className={`flex flex-col items-center ${
                    integrante.votacion?.tipo_voto_id === 2
                      ? "border-4 border-black p-2 rounded-lg"
                      : ""
                  }`}
                  onClick={() =>
                    handleVoto(integrante.id, 2, integrante.votacion?.id)
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
                    />
                  </svg>
                  <p>En contra</p>
                </button>

                <button
                  className={`flex flex-col items-center ${
                    integrante.votacion?.tipo_voto_id === 3
                      ? "border-4 border-black p-2 rounded-lg"
                      : ""
                  }`}
                  onClick={() =>
                    handleVoto(integrante.id, 3, integrante.votacion?.id)
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002"
                    />
                  </svg>
                  <p>Abstinencia</p>
                </button>

                <button
                  className={`flex flex-col items-center ${
                    integrante.votacion?.tipo_voto_id === 4
                      ? "border-4 border-black p-2 rounded-lg"
                      : ""
                  }`}
                  onClick={() =>
                    handleVoto(integrante.id, 4, integrante.votacion?.id)
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                  <p>Inasistencia</p>
                </button>
              </>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}
