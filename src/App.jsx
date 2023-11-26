import React from "react";
import Header from "./components/Header";
import { netflix } from "./constants/data";
import Container from "./components/Container";
import AccodianList from "./components/AccodianList";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Header />
      <section
        style={{
          
          width: "80%",
          margin: "0 auto",
        }}
      >
        {netflix.map((data) => {
          if (data.id === 2 || data.id === 4) {
            return (
              <Container key={data.id} orderOne={1} orderTwo={2} {...data} />
            );
          } else {
            return <Container key={data.id} {...data} />;
          }
        })}
         <AccodianList />
         <Footer />
      </section>
    </div>
  );
}
