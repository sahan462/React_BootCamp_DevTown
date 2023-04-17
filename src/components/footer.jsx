const react = require("react");

function footer() {
  const year = new Date().getFullYear();

  return (
    <div>
      <footer>
        <p>Copyright @ {year}</p>
      </footer>
    </div>
  );
}

export default footer;
