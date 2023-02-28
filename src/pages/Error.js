import React from "react";
import { Link } from "react-router-dom";
import "../styles/Error.css";

function NotFoundPage() {
  return (
    <main className="main_error-page">
      <div>
        <h1 className="h1_error">404</h1>
        <p className="p_error">Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="encre_footer">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </main>
  );
}
export default NotFoundPage;
