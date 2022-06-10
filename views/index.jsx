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
      <ul>
        {breads.map((bread, index) => {
          console.log(bread.name);
          console.log(index);
          return (
            <li key={index}>
              <a href={`/breads/${bread.id}`}>{bread.name}</a>
              {/* <p>{bread.getBakedBy()}</p> */}
            </li>
          );
        })}
      </ul>
      <div className="newButton">
        <a href="/breads/new"><button>Add a new bread</button></a>
      </div>

    </Default>
  );
}

module.exports = Index;