var datoUsuario = {
    usuario: " ",
    password: "",
    nombre: "   ",
    apellido: "",
    edad: 0,
    profesion: ""
}

function validarContraseña (){
    let contraseña1 = document.getElementById('ingresoContraseña').value;
    let contraseña2 = document.getElementById('repitoContraseña').value;
    let aprueba = false;
    if (contraseña1!=contraseña2){
       alert("Las contraseñas no son iguales");
    } else aprueba=true;
    return aprueba;
    }
   
function validarUsuario(){
    let usuarioIngresado = document.getElementById('ingresarUsuario').value;
    let passwordIngresada = document.getElementById('ingresarPassword').value;
    if(usuarioIngresado==datoUsuario.usuario && passwordIngresada==datoUsuario.password){
    alert("Ingreso exitoso");}
    else alert("Usuario o contraseña invalida");
    }

function mostrarRegistro (){
    document.getElementById('contenedor-registro').style.visibility="visible";
    document.getElementById('contenedor-formulario').style.visibility="hidden";
    
   
}

function mostrarFormulario(){
    document.getElementById('contenedor-registro').style.visibility="hidden";
    document.getElementById('contenedor-formulario').style.visibility="visible";
    document.getElementById('ingresarPassword').value=null;
    document.getElementById('ingresarUsuario').value=null;    
}

function verificarCaptcha(){
    let captchaIngresado = document.getElementById('captchaIngresado').value;
    let verifica = false;
    if(captchaIngresado=="Td4eva")
    verifica=true;
    else alert("Captcha invalido");
    return verifica;
}

function registrar() {
    const miForm = document.ventana;
    datoUsuario.usuario = miForm.usuario.value;
    datoUsuario.password = miForm.password.value;
    datoUsuario.apellido = miForm.apellido.value;
    datoUsuario.nombre = miForm.nombre.value;
    datoUsuario.edad = miForm.edad.value;
    datoUsuario.profesion = miForm.profesiones.value;
    if(validarContraseña() && verificarCaptcha()){
        mostrarFormulario();
        alert("Registro exitoso");
    }
    document.getElementById('captchaIngresado').value=null
    document.getElementById('ingresoContraseña').value=null;    
    document.getElementById('repitoContraseña').value=null;
}


