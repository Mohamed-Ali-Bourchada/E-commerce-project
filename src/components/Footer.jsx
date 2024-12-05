import React from "react";

const Footer = () => {
  return (
    <>
  <footer className="bg-dark text-white py-4">
  <div className="container">
    <div className="row">
      <div className="col-md-4 mb-3">
        <h5 className="text-uppercase">Elmarché</h5>
        <p>
          Elmarché, votre marketplace de confiance. Découvrez une large gamme de produits adaptés à tous vos besoins.
        </p>
      </div>
      
      <div className="col-md-4 mb-3">
        <h5 className="text-uppercase">Liens rapides</h5>
        <ul className="list-unstyled">
          <li><a href="/about" className="text-white text-decoration-none">À propos</a></li>
          <li><a href="/product" className="text-white text-decoration-none">Boutique</a></li>
          <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
        </ul>
      </div>
      
      <div className="col-md-4 mb-3">
        <h5 className="text-uppercase">Contactez-nous</h5>
        <ul className="list-unstyled">
          <li><i className="fa fa-phone me-2"></i> +216 12 345 678</li>
          <li><i className="fa fa-envelope me-2"></i> contact@elmarche.com</li>
          <li><i className="fa fa-map-marker-alt me-2"></i> Djerba, Tunisie</li>
        </ul>
      </div>
    </div>

    <hr className="text-white" />

    <div className="text-center">
      <p className="mb-0">
        &copy; 2024 Elmarché. Tous droits réservés.
      </p>
    </div>
  </div>
</footer>

    </>
  );
};

export default Footer;
