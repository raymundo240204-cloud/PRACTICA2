import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../assets/css/login.css";
import { useNavigate } from "react-router-dom";

// 🔹 Esquema de validación con Yup
const schema = yup.object({
  username: yup
    .string()
    .min(5, "El nombre de usuario debe tener al menos 5 caracteres.")
    .required("El nombre de usuario es obligatorio"),
  email: yup
    .string()
    .email("Correo inválido")
    .required("El correo electrónico es obligatorio"),
  password: yup
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres.")
    .required("La contraseña es obligatoria"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Las contraseñas no coinciden.")
    .required("Confirma tu contraseña"),
});

function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const onSubmit = async (data) => {
    alert("Registro OK:\n" + JSON.stringify(data, null, 2));
    navigate("/login"); // redirigir al login tras registro exitoso
  };

  return (
    <div className="login-card">
      <h2>Crear Cuenta</h2>
      <p>Regístrate para unirte a la comunidad.</p>

      <form
        className="form table-container"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        {/* Usuario */}
        <div className="form-group">
          <label>Usuario</label>
          <input
            type="text"
            className="input"
            placeholder="Tu nombre de usuario"
            {...register("username")}
          />
          {errors.username && (
            <small style={{ color: "#ff6b6b" }}>{errors.username.message}</small>
          )}
        </div>

        {/* Correo */}
        <div className="form-group">
          <label>Correo Electrónico</label>
          <input
            type="email"
            className="input"
            placeholder="tucorreo@ejemplo.com"
            {...register("email")}
          />
          {errors.email && (
            <small style={{ color: "#ff6b6b" }}>{errors.email.message}</small>
          )}
        </div>

        {/* Contraseña */}
        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            className="input"
            placeholder="••••••••"
            {...register("password")}
          />
          {errors.password && (
            <small style={{ color: "#ff6b6b" }}>{errors.password.message}</small>
          )}
        </div>

        {/* Confirmar Contraseña */}
        <div className="form-group">
          <label>Confirmar Contraseña</label>
          <input
            type="password"
            className="input"
            placeholder="••••••••"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <small style={{ color: "#ff6b6b" }}>
              {errors.confirmPassword.message}
            </small>
          )}
        </div>

        {/* Botón */}
        <button
          type="submit"
          className="btn btn--primary"
          disabled={isSubmitting}
        >
          Registrarse
        </button>
      </form>

      <div className="login-footer">
        <a href="/login">¿Ya tienes una cuenta? Inicia sesión</a>
      </div>
    </div>
  );
}

export default Register;
