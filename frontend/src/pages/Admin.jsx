import AdminLayout from "../components/layout/admin/AdminLayout";
import Navbar from "../components/layout/Navebar";

function Admin() {
  return (
    <AdminLayout>
      <Navbar />
      <h1>Bienvenido al panel de administración</h1>
      <p>Aquí podrás gestionar tus productos, pedidos y categorías.</p>
    </AdminLayout>
  );
}

export default Admin;
