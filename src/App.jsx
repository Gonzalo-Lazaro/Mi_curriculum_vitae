// Importamos el archivo de estilos del CV para que se apliquen las clases CSS
import "./App.css";

// Datos CV
// Los datos se guardan en constantes fuera del componente.
// Así el JSX no repite bloques: Cada lista se recorre con map().

// Habilidades: Nombre de la tecnología y nivel (0-100)
const habilidades = [
  { nombre: "HTML", nivel: 90 },
  { nombre: "CSS", nivel: 85 },
  { nombre: "React", nivel: 55 },
  { nombre: "Kotlin", nivel: 70 },
  { nombre: "Git", nivel: 65 },
];

// Idiomas: nombre y nivel
const idiomas = [
  { nombre: "Español", nivel: "Nativo" },
  { nombre: "Inglés", nivel: "Intermedio" },
];

// Experiencia: Puesto, empresa, periodo y descripción
const experiencias = [
  {
    puesto: "Prácticas de Mantenimiento de Sistemas Informáticos",
    empresa: "IES El Portillo (Zaragoza)",
    periodo: "Septiembre 2024 - Diciembre 2024",
    descripcion: "Reparación y mantenimiento de ordenadores y switches, etiquetado del equipo",
  },
  {
    puesto: "Proyecto: Aplicaciones_clase",
    empresa: "CPIFP Los Enlaces (Zaragoza)",
    periodo: "2026",
    descripcion:
      "Desarrollo de aplicaciones en Kotlin con diferentes pantallas para realizar variedad de funciones y comprobar su funcionamiento",
  },
];

// Educación: título, centro y años
const estudios = [
  {
    titulo: "Educación Secundaria Obligatoria (ESO)",
    centro: "IES Joaquín Costa (Cariñena, Zaragoza)",
    periodo: "2018 - 2022",
  },
  {
    titulo: "Grado Medio de Sistemas Microinformáticos y Redes",
    centro: "CPIFP Los Enlaces (Zaragoza)",
    periodo: "2022 - 2024",
  },
  {
    titulo: "Grado Superior de Desarrollo de Aplicaciones Multiplataforma",
    centro: "CPIFP Los Enlaces (Zaragoza)",
    periodo: "2024 - presente",
  },
];

// Competencias: lista de cualidades personales
const competencias = [
  "Capacidad de aprendizaje",
  "Trabajo en equipo",
  "Responsable",
  "Resolución de problemas",
];

// Componente principal
// Un componente es una función de JavaScript con nombre en mayúscula que devuelve JSX.
// App contiene todo el currículum.
function App() {
  return (
    // JSX solo permite un elemento raíz: este div envuelve todo el CV.
    // Usamos className (no class) porque class es una palabra reservada de JavaScript.
    <div className="contenedor-principal">

      {/* Header: Foto, nombre, título profesional y datos de contacto */}
      <div className="header">
        {/* La imagen está en la carpeta public/, por eso la ruta empieza por "/" */}
        <img
          src="/Foto.jpg"
          alt="Mi foto"
          className="foto-perfil"
        />
        <h1>Gonzalo Lázaro Rodrigo</h1>
        <h2>Estudiante de Desarrollo de Aplicaciones Multiplataforma</h2>
        <p>📧 glazarorodrigo@gmail.com | 📱 679 75 25 33 | 📍 Zaragoza, España</p>
      </div>

      {/* Contenido en dos columnas: .contenido usa CSS Grid (1fr 2fr) */}
      <div className="contenido">

        {/* Columna izquierda: Sobre mí, Habilidades e Idiomas */}
        <div className="columna-izquierda">

          {/* Sobre mí: Descripción breve del perfil profesional (2-3 líneas) */}
          <div className="seccion">
            <h2 className="titulo-seccion">Sobre Mí</h2>
            <p>
              Estudiante de Grado Superior con ganas de seguir progresando.
              Me gusta aprender nuevas tecnologías y crear aplicaciones, hacer mis propios proyectos personales.
              También aprendo siguiendo vídeos de programadores.
            </p>
          </div>

          {/* Habilidades: una barra de progreso por tecnología (mínimo 4 tecnologías) */}
          <div className="seccion">
            <h2 className="titulo-seccion">Habilidades</h2>

            {/* map() recorre el array "habilidades" y crea un bloque por cada elemento.
                key identifica cada elemento de la lista (React lo necesita para optimizar).
                El ancho de la barra interior (style width) marca el nivel.
                En JSX el estilo en línea es un objeto de JavaScript: por eso lleva doble llave {{ }}. */}
            {habilidades.map((hab) => (
              <div className="habilidad-barra" key={hab.nombre}>
                <div className="habilidad-info">
                  <span>{hab.nombre}</span>
                  <span>{hab.nivel}%</span>
                </div>
                <div className="barra-fondo">
                  <div className="barra-nivel" style={{ width: `${hab.nivel}%` }}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Idiomas: Reutilizamos las etiquetas de habilidades y recorremos el array con map() */}
          <div className="seccion">
            <h2 className="titulo-seccion">Idiomas</h2>
            <div className="lista-habilidades">
              {idiomas.map((idioma) => (
                <div className="habilidad" key={idioma.nombre}>
                  {idioma.nombre}: {idioma.nivel}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Columna derecha: Experiencia, Educación y Competencias */}
        <div className="columna-derecha">

          {/* Experiencia: Puesto, empresa, periodo y descripción (mínimo 2 trabajos/prácticas).
              La clase item-experiencia dibuja la barra morada de la izquierda */}
          <div className="seccion">
            <h2 className="titulo-seccion">Experiencia</h2>
            {experiencias.map((exp) => (
              <div className="item-experiencia" key={exp.puesto}>
                <h3>{exp.puesto}</h3>
                <p className="empresa">{exp.empresa}</p>
                <p className="tiempo">{exp.periodo}</p>
                <p>{exp.descripcion}</p>
              </div>
            ))}
          </div>

          {/* Educación: Título, centro educativo y años.
              Reutilizamos la clase item-experiencia para tener el mismo estilo (barra morada) */}
          <div className="seccion">
            <h2 className="titulo-seccion">Educación</h2>
            {estudios.map((est) => (
              <div className="item-experiencia" key={est.titulo}>
                <h3>{est.titulo}</h3>
                <p className="empresa">{est.centro}</p>
                <p className="tiempo">{est.periodo}</p>
              </div>
            ))}
          </div>

          {/* Competencias: Lista de cualidades personales */}
          <div className="seccion">
            <h2 className="titulo-seccion titulo-linea">Competencias</h2>
            <ul className="lista-competencias">
              {competencias.map((comp) => (
                <li key={comp}>{comp}</li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}

// Exportamos el componente para poder importarlo desde main.jsx
export default App;