import Swal from "sweetalert2";

export function errorMessage() {
  Swal.fire({
    title: "Error!",
    text: "Algo anda mal!!!",
    icon: "error",
    confirmButtonText: "Ok",
  });
}

export function validatePassword() {
  Swal.fire({
    title: "Error!",
    text: "Sus contraseñas no coincide",
    icon: "error",
    confirmButtonText: "Ok",
  });
}

export function generalMessage() {
  Swal.fire("Buen Trabajo!", "Su requerimiento esta en proceso", "success");
}
