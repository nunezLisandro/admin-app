function Topbar() {
  return (
    <header style={styles.topbar}>
      <input
        type="text"
        placeholder="Buscar..."
        style={styles.search}
      />

      <div style={styles.user}>
        Admin
      </div>
    </header>
  );
}

const styles = {
  topbar: {
    height: "80px",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 30px",
    borderBottom: "1px solid #E2E8F0",
  },

  search: {
    padding: "10px 15px",
    width: "300px",
    borderRadius: "10px",
    border: "1px solid #CBD5E1",
  },

  user: {
    fontWeight: "bold",
    color: "#334155",
  },
};

export default Topbar;