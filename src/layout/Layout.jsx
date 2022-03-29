import Navbar from "../components/Navbar/Navbar";


export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="layout_body">
        { children }
      </div>
    </>
  );
}