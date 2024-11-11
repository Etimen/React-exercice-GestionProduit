import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Produits from "./Produits";
import AjouterProduits from "./AjouterProduitsForm";
// import Ventes from "./components/Ventes";
// import UpdateProduits from "./components/UpdateProduits";
// import DeleteProduits from "./components/DeleteProduits";


function App(){

  const AjouterProduit = (newProduit) => {
    setProduits([...produits, { ...newProduit, id: produits.length + 1 }]);
  };
  const supprimerProduit = (id) => {
    setProduits(produits.filter(produit => produit.id !== id));
    setMessage('Produit supprimer');
   
  }
  const [msg, setmsg] = useState('');

  const [produits, setProduits] = useState([
    {
      id:1,
      libelle:'pc',
      categorie:{id:5,libelle:"informatique"},
      prix:5000,
      quantiteStock:10
    }
  ])
  return(
    <>
    
    <Routes>
      <Route path="/ListdesProduit" element={<Produits produits = {produits} supprimerProduit={supprimerProduit} msg={msg}/>}/>
      <Route path="/AjouterProduits" element={<AjouterProduits  AjouterProduit = {AjouterProduit} />}/>


      
    </Routes>
    </>
    
  )
}

export default App;