import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopNews from "./TopNews";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SearchNews from "./SearchNews";
import Button from "react-bootstrap/Button";
import Categories from "./Categories";

const countries = [
  { label: "GB", value: "gb" },
  { label: "US", value: "us" },
];

function App() {
  const [country, setCountry] = React.useState<string>(countries[0].value);

  return (
    <div className="App">
      <Tabs
        defaultActiveKey="topnews"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="topnews" title="Top News">
          <TopNews country={country} />
        </Tab>
        <Tab eventKey="categories" title="Categories">
          <Categories />
        </Tab>
        <Tab eventKey="search" title="Search">
          <SearchNews country={country}/>
        </Tab>
      </Tabs>
      <div className="country-container">
        {countries.map((c) => (
          <Button
            className=" mx-1"
            active={c.value == country}
            onClick={() => setCountry(c.value)}
            variant="primary"
          >
            {c.label}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default App;
