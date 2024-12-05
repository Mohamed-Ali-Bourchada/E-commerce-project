import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
          

Bienvenue chez Elmarché, votre destination privilégiée pour des poissons frais directement issus des eaux cristallines de l’île de Djerba. Nous sommes passionnés par la mer et déterminés à offrir à nos clients des produits de la plus haute qualité, pêchés quotidiennement par des pêcheurs locaux.  

Notre engagement est simple : vous apporter le meilleur de la mer, avec un service de proximité et un respect total de l'environnement marin. Que vous soyez un amateur de fruits de mer ou un professionnel de la gastronomie, nous sommes là pour répondre à vos besoins en vous garantissant fraîcheur et authenticité.  

Rejoignez-nous pour savourer le goût unique des trésors marins de Djerba !  
        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="assets/seiche.png" alt="" height={160} />
              
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="assets/merou.png" alt="" height={160} />
              
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="assets/calamar.png" alt="" height={160} />
              
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="assets/sardine.png" alt="" height={160} />
             
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage