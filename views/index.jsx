const React = require("react");
const Default = require("./layouts/Default");

function Index({ breads }) {
  //   console.log("--------------------");
  //   // FOCUS HERE
  //   console.log(breads[0].name);

  //   // STOP FOCUS HERE
  //   console.log("--------------------");

  return (
    <Default>
      <h2>Index Page For the bread</h2>
      {/* <p>I have {breads[0].name} bread! </p> */}
      <ul>
        {breads.map((bread, index) => {
          console.log(bread.name);
          console.log(index);
          return (
            <li key={index}>
              <a href={`/breads/${index}`}>{bread.name}</a>
            </li>
          );
        })}
      </ul>
    </Default>
  );
}

module.exports = Index;