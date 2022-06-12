const React = require("react");
const baker_seed = require("../models/baker_seed");
const Default = require("./layouts/Default");

function Index({ breads, bakers, title }) {
  //   console.log("--------------------");
  //   // FOCUS HERE
  //   console.log(breads[0].name);

  //   // STOP FOCUS HERE
  //   console.log("--------------------");

  return (
    <Default>
      <h2>Index Page For the bread</h2>
      <h3>Bakers</h3>
      <ul>
        {
          bakers.map((baker) => {
            return(
              <li key={baker._id}>
                <a href={`/bakers/${baker._id}`}>{baker.name}</a>
              </li>
            )
          })
        }
      </ul>
      <h3>Breads</h3>
      <ul>
        {breads.map((bread) => {
          return (
            <li key={bread._id}>
              <a href={`/breads/${bread._id}`}>{bread.name}</a>

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