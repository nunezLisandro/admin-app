function Login() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>

        <div style={styles.logoContainer}>
          <div style={styles.logo}>
            🍴
          </div>

          <h2 style={styles.brand}>
            FoodStore
          </h2>
        </div>

        <div style={styles.header}>
          <h1 style={styles.title}>
            Bienvenido de nuevo
          </h1>

          <p style={styles.subtitle}>
            Ingresa tus credenciales para continuar
          </p>
        </div>

      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#F1F5F9",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: "420px",
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  },

  logoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "30px",
  },

  logo: {
    width: "60px",
    height: "60px",
    backgroundColor: "#FF5F40",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2rem",
    marginBottom: "10px",
  },

  brand: {
    color: "#FF5F40",
    fontSize: "1.8rem",
    fontWeight: "bold",
  },

  header: {
    textAlign: "center",
  },

  title: {
    color: "#334155",
    marginBottom: "10px",
    fontSize: "2rem",
  },

  subtitle: {
    color: "#64748B",
    fontSize: "1rem",
  },
};

export default Login;
