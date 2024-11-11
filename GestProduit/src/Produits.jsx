export default function Produits({ produits }) {
    return (
      <>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 font-sans">
              <tr>
                <th scope="col" className="px-6 py-3 text-base">
                  Identifiant
                </th>
                <th scope="col" className="px-6 py-3 text-base">
                  Libelle
                </th>
                <th scope="col" className="px-6 py-3 text-base">
                  Categorie
                </th>
                <th scope="col" className="px-6 py-3 text-base">
                  Quantité en stock
                </th>
                <th scope="col" className="px-6 py-3 text-base">
                  Prix
                </th>
                <th scope="col" className="px-6 py-3 text-base">
                  Prix total
                </th>
                <th scope="col" className="px-6 py-3 text-lg">
                  <button>Edit</button>
                </th>
              </tr>
            </thead>
            <tbody className="text-blue-600 text-lg ">
              {produits.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6 text-left text-base ">{item.id}</td>
                  <td className="py-3 px-6 text-left text-base">{item.libelle}</td>
                  <td className="py-3 px-6 text-center text-base">
                    {item.categorie.libelle}
                  </td>
                  <td className="py-3 px-6 text-center text-base">{item.quantiteStock}</td>
                  <td className="py-3 px-6 text-center text-base">{item.prix}</td>
                  <td className="py-3 px-6 text-center text-base">
                    {Number(item.prix) * Number(item.quantiteStock)}
                  </td>
                  <td><button class="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md"> Supprimer</button></td>
 


                </tr>
              ))}
            </tbody>
          </table>
         

        </div> <button class="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md m-5"> <a href="AjouterProduits">Ajouter Un Produit</a></button>
      </>
    );
  }
  