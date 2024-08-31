// seleccion de elementos del formulario
const formRegister= document.querySelector("#alumno"),
user= document.querySelector("#user"),
correo= document.querySelector("#correo"),
celular= document.querySelector("#celular"),
estadoAcademico= document.querySelector("#mensaje"),
btnRegistrar= document.querySelector("#registrar");

//Inicializando el array de alumnos en el local Storage con operador logico OR
let alumnos = JSON.parse(localStorage.getItem('alumnos')) || [];
 //Constructora del objeto Alumno
class Alumno{
 constructor (nombre, email, telefono,condicion){ // funcion constructora del objeto alumnado
        this.nombre=nombre;
        this.email=email;
        this.telefono=telefono;
        this.condicion= condicion;
}
}
//Funcion para guardar en localStorage;
function guardarenLS(arr){
    return localStorage.setItem ('alumnos', JSON.stringify(arr))
}
//Evento al enviar el formulario
formRegister.addEventListener('submit', (e) => {
    e.preventDefault();
    // Crear un nuevo objeto Alumno con los datos provenientes del formulario
    const newAlumno = new Alumno(user.value, correo.value, celular.value, estadoAcademico.value);
    // Agregar el nuevo alumno al array
    alumnos.push(newAlumno);
    // Guardar el array actualizado en localStorage
    guardarenLS(alumnos);
    // Limpiar el formulario
    formRegister.reset();
    // Opcional: Mensaje de confirmación
    alert('Datos del alumno guardados.');
});
     // Busqueda de alumno por nombre
    //Objeto en el que se presenta el resultado de la busqueda  
    let caja = document.getElementById("caja");
     //funcion de busqueda en el array alumnos
    function buscarAlumno(arr, filtro) {
         const encontrado = arr.find((el) => {
           return el.nombre.includes(filtro);
        });
         return encontrado;
      }
    
      const btnSearch = document.getElementById("btnSearch");
      const inputSearch = document.getElementById("ingreso");
      //evento del boton de busqueda
      btnSearch.addEventListener("click", () => {
      const encontrado = buscarAlumno(alumnos, inputSearch.value);
      caja.innerText= encontrado ? JSON.stringify(encontrado): 'Alumno no encontrado'; 
      inputSearch.value=''; 
      });
     