import React from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Se connecter</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div className="my-3">
                <label htmlFor="display-4">Adresse email</label>
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="nom@exemple.com"
                  required
                  pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                  title="Veuillez entrer un email valide (ex: nom@exemple.com)"
                />
              </div>
              <div className="my-3">
                <label htmlFor="floatingPassword display-4">Mot de passe</label>
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Mot de passe"
                  required
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Le mot de passe doit contenir au moins un chiffre, une lettre majuscule et minuscule, et au moins 8 caractères"
                />
              </div>
              <div className="my-3">
                <p>Nouveau ici ? <Link to="/register" className="text-decoration-underline text-info">S'inscrire</Link></p>
              </div>
              <div className="text-center">
                <button className="my-2 mx-auto btn btn-dark" type="submit">
                  Se connecter
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
  