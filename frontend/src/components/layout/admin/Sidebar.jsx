function Sidebar() {
  return (
    <aside style={styles.sidebar}>
      <h2 style={styles.logo}>Food Admin</h2>

      <nav style={styles.nav}>
        <button style={styles.button}>Dashboard</button>
        <button style={styles.button}>Productos</button>
        <button style={styles.button}>Pedidos</button>
        <button style={styles.button}>Categorías</button>
      </nav>
    </aside>
  );
}

const styles = {
  sidebar: {
    width: "250px",
    backgroundColor: "#334155",
    color: "white",
    padding: "30px 20px",
  },

  logo: {
    marginBottom: "40px",
    color: "#FF5F40",
  },

  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  button: {
    backgroundColor: "transparent",
    border: "none",
    color: "white",
    padding: "12px",
    textAlign: "left",
    borderRadius: "10px",
    cursor: "pointer",
  },
};

export default Sidebar;