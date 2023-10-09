export const handleErrors = (code) => {
    switch (code) {
        case "22P02":
            return {
                status: 400,
                message: "Formato no valido"
            }
        case "23505":
            return {
                status: 400,
                message: "Email ya registrado"
            }
        case "23503":
            return {
                status: 400,
                message: "no se encuentra registro"
            }
        case "400":
            return {
                status: 400,
                message: "Faltan datos en la peticion"
            }
        case "404":
            return {
                status: 404,
                message: "no existe ese registro"
            }
        case "1111":
            return {
                status: 401,
                message: "usuario no autorizado para actualizar este registro"
            }
        default:
            return {
                status: 500,
                message: "Error de servidor"
            }
    }
}