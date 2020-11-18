import "./App.css";
import React from "react";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";

const searchClient = algoliasearch("CKVUOZDP79", "61cafd3708c4b9032a72653784b75694", {
  _useRequestCache: true,
});

const Hit = ({ hit }) => {
  <div className="hit">
    <div className="hit-image">{hit.name}</div>
  </div>;
};

const Slidebar = () => (
  <div>
    <div className="sidebar"></div>
  </div>
);

const Content = () => (
  <div>
    <div className="content">
      <Hits hitComponent={Hit} />
    </div>
  </div>
);

function App() {
  return (
    <div>
      <InstantSearch searchClient={searchClient} indexName="electrohack">
        <img src="" className="img-fluid" alt="" />
        <header className="header">
          <SearchBox translations={{ placeholder: "buscar..." }}></SearchBox>
        </header>
      </InstantSearch>
      <main>
        <Slidebar></Slidebar>

        <Content></Content>
      </main>
    </div>
  );
}

export default App;
