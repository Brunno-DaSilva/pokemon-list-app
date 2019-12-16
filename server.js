/*****************************
 *                           *
 *     Pokedex Homework      *
 *                           *
 *************************** */

//======================
//      Variables
//======================
const express = require("express");
const app = express();
const pokemons = require("./models/pokemon.js");
const port = 3000;
const methodOverride = require("method-override");

//======================
// //Added a MIDDLEWARE
//======================
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(methodOverride("_method"));

//==========================
//        Routers
//==========================
//
//
//================
//  Index
//================
app.get("/pokemon", (req, res) => {
  res.render("index.ejs", {
    pokemons: pokemons
  });
});

//================
//      New
//================
app.get("/pokemon/new", (req, res) => {
  res.render("new.ejs", {
    pokemons: pokemons
  });
});

//======================
// New >> Create Route
//======================
app.post("/pokemon", (req, res) => {
  let newPokemon = {
    id: pokemons.length,
    name: req.body.name,
    img: req.body.img,
    type: [req.body.type],
    stats: {
      hp: req.body.hp,
      attack: req.body.attack,
      defense: req.body.defense
    },
    damages: {
      normal: req.body.normal,
      fire: req.body.fire,
      water: req.body.water,
      electric: req.body.electric,
      grass: req.body.grass,
      ice: req.body.ice,
      fight: req.body.fight,
      poison: req.body.poison,
      ground: req.body.ground,
      flying: req.body.flying,
      psychic: req.body.psychic,
      bug: req.body.bug,
      rock: req.body.rock,
      ghost: req.body.ghost,
      dragon: req.body.dragon,
      dark: req.body.dark,
      steel: req.body.steel
    },
    misc: {
      abilities: {
        normal: [req.body.normal],
        hidden: [req.body.hidden]
      },
      classification: req.body.classification
    }
  };
  pokemons.push(newPokemon);
  res.redirect("/pokemon");
});

//================
//     Show
//================
app.get("/pokemon/:id", (req, res) => {
  res.render("show.ejs", {
    pokemons: pokemons[req.params.id]
  });
});

//================
//  Edit Route
//================
app.get("/pokemon/:id/edit", (req, res) => {
  res.render("edit.ejs", {
    pokemons: pokemons[req.params.id],
    index: req.params.id,
    pokemons: pokemons
  });
});

app.put("/pokemon/:id", (req, res) => {
  pokemons[req.params.id] = {
    id: pokemons.length,
    name: req.body.name,
    img: req.body.img,
    type: [req.body.type],
    stats: {
      hp: req.body.hp,
      attack: req.body.attack,
      defense: req.body.defense
    },
    damages: {
      normal: req.body.normal,
      fire: req.body.fire,
      water: req.body.water,
      electric: req.body.electric,
      grass: req.body.grass,
      ice: req.body.ice,
      fight: req.body.fight,
      poison: req.body.poison,
      ground: req.body.ground,
      flying: req.body.flying,
      psychic: req.body.psychic,
      bug: req.body.bug,
      rock: req.body.rock,
      ghost: req.body.ghost,
      dragon: req.body.dragon,
      dark: req.body.dark,
      steel: req.body.steel
    },
    misc: {
      abilities: {
        normal: [req.body.normal],
        hidden: [req.body.hidden]
      },
      classification: req.body.classification
    }
  };

  res.redirect("/pokemon");
});

//================
//================
//    DELETE
//================
//================
app.delete("/pokemon/:id", (req, res) => {
  pokemons.splice(req.params.id, 1); //remove the item from the array
  res.redirect("/pokemon"); //redirect back to index route
});

//=====================
//  Listening Port
//=====================
app.listen(port, () => {
  console.log("I am listening on port 3000");
});
