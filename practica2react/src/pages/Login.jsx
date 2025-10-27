
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../assets/css/login.css"; // importa tus estilos (ajusta ruta si es necesario)
import { useNavigate } from "react-router-dom";

const schema = yup.object({
  email: yup
    .string()
    .email("Correo inválido")
    .required("El correo es obligatorio"),
  password: yup
    .string()
    .min(6, "Mínimo 6 caracteres")
    .required("La contraseña es obligatoria"),
}).required();

function Login({ onLogin }) {
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
  alert("Login OK:\n" + JSON.stringify(data, null, 2));
  localStorage.setItem("loggedIn", "true");
  if (typeof onLogin === "function") onLogin();
  navigate("/");
};

  return (
    <div className="login-card">
      <h2>Iniciar Sesión</h2>
      <p>Accede a tu cuenta para continuar.</p>

      <form
        className="form table-container"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <label>Correo</label>
        <input
          type="email"
          className="input"
          placeholder="tucorreo@ejemplo.com"
          {...register("email")}
        />
        {errors.email && (
          <small style={{ color: "#ff6b6b" }}>{errors.email.message}</small>
        )}

        <div style={{ height: "12px" }}></div>

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

        <button
          className="btn btn--primary"
          disabled={isSubmitting}
          style={{ marginTop: "16px" }}
        >
          Entrar
        </button>
      </form>

      <div className="login-footer">
        <a href="/register">¿No tienes cuenta? Regístrate</a>
      </div>
    </div>
  );
}

export default Login;
