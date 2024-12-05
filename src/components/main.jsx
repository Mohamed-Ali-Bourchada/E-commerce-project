import React from "react";
import { Link } from 'react-router-dom'; // Import Link component

const Home = () => {
  return (
    <>
     <div className="hero-section">
  <div className="card bg-dark text-white border-0">
    <img
      className="card-img img-fluid"
      src="./assets/enchere.jpeg"
      alt="Background"
      style={{ height: "100vh", objectFit: "cover" }}
    />
    <div className="card-img-overlay hero-overlay d-flex align-items-center justify-content-center text-center">
      <div className="container py-5 px-4 rounded bg-dark bg-opacity-25 shadow">
        <h1 className="hero-title fw-bold text-uppercase text-light display-3 mb-3">
          Bienvenue chez <span className="text-primary">Elmarché</span>
        </h1>
        <p className="hero-text text-light fs-5 lh-lg">
          Découvrez des poissons et fruits de mer frais, pêchés chaque jour dans les eaux de l’île de Djerba. <br />
          <span className="fw-semibold">La qualité et la fraîcheur</span> sont notre promesse pour vos repas d’exception.
        </p>
        <Link to="/product" className="btn btn-primary btn-lg mt-4 px-5 shadow">
          Explorez Nos Produits
        </Link>
      </div>
    </div>
  </div>
</div>


    </>
  );
};

export default Home;
