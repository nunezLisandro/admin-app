function Navbar() {
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>Food Store</h2>

      <div style={styles.links}>
        <a href="/">Inicio</a>
        <a href="/">Productos</a>
        <a href="/">Carrito</a>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: "#FFFFFF",
    padding: "20px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  },

  logo: {
    color: "#FF5F40",
  },

  links: {
    display: "flex",
    gap: "20px",
    color: "#334155",
    fontWeight: "bold",
  },
};

export default Navbar;