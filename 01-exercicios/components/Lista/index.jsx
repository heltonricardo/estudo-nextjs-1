export default ({ children }) => (
  <>
    <h1>Lista de Coisas</h1>
    <ul
      style={{
        listStyle: "none",
        color: "red",
      }}
    >
      {children}
    </ul>
  </>
);
