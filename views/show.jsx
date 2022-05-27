const React = require('react')
const Default = require('./layouts/Default')

function Show ({bread}) {
  // Confirm we are getting our bread data in the terminal.
  // console.log(bread.name)
    return (
      <Default>
        <h2>Show Page</h2>
        <h3>{bread.name}</h3>
        <p>
          and it
          {
            bread.hasGluten
            ? <span> does </span>
            : <span> does NOT </span>
          }
          have gluten.
        </p>
        <img src={bread.image} alt={bread.name} />
        <li><a href="/breads">Go Home</a></li>
      </Default>
    )
}


module.exports = Show
