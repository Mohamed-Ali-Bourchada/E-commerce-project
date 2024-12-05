import React from 'react'
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">S'inscrire</h1>
                <hr />
                <div className="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <form>
                            <div className="form my-3">
                                <label htmlFor="Name">Nom complet</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Name"
                                    placeholder="Entrez votre nom"
                                    required
                                    pattern="[a-zA-Z' ']+" 
                                    title="Veuillez entrer un nom valide, uniquement des caractères"
                                />
                            </div>
                            <div className="form my-3">
                                <label htmlFor="Email">Adresse email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="Email"
                                    placeholder="nom@exemple.com"
                                    pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                                    title="Veuillez entrer un email valide (ex: nom@exemple.com)"
                                    required
                                />
                            </div>
                            <div className="form my-3">
                                <label htmlFor="Password">Mot de passe</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="Password"
                                    placeholder="Mot de passe"
                                    required
                                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                    title="Le mot de passe doit contenir au moins un chiffre, une lettre majuscule et minuscule, et au moins 8 caractères"
                                />
                            </div>
                            <div className="my-3">
                                <p>Vous avez déjà un compte ? <Link to="/login" className="text-decoration-underline text-info">Se connecter</Link></p>
                            </div>
                            <div className="text-center">
                                <button className="my-2 mx-auto btn btn-dark" type="submit">
                                    S'inscrire
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Register;
