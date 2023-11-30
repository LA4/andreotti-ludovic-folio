/**
 * @returns {React.node}
 */

export function Legalmentions() {
  const legalmentionStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "50px auto",
  };
  return (
    <>
      <div style={legalmentionStyle}>
        <div style={legalmentionStyle}>
          <h3>Informations legales</h3>
          <span>Andreotti Ludovic</span>72 rue alphonse daudet, 30210 remoulins
          06 42 53 39 53 andr.ludow@gmail.com siret : 85209615500019
        </div>
        <div style={legalmentionStyle}>
          <h3>Créateur du site internet</h3>
          <span>Andreotti Ludovic</span>
          contact : andr.ludow@gmail.com
        </div>
        <div style={legalmentionStyle}>
          <h3>Hebergeur du site </h3>
          <span>OVH</span>
          <p style={{ maxWidth: "600px" }}>
            SAS au capital de 10 174 560 € RCS Lille Métropole 424 761 419 00045
            Code APE 2620Z N° TVA : FR 22 424 761 419 Siège social : 2 rue
            Kellermann - 59100 Roubaix - France OVH SAS est une filiale de la
            société OVH Groupe SA, société immatriculée au RCS de Lille sous le
            numéro 537 407 926 sise 2, rue Kellermann, 59100 Roubaix. Directeur
            de la publication : Michel Paulin Ce site est hébergé par OVH SAS 2
            rue Kellermann - 59100 Roubaix - France
          </p>
        </div>
        <div style={legalmentionStyle}>
          <h3>Propriété intellectuelles</h3>
          <p>
            Les images, dessins et autres créations utilisés dans ce site
            internet est la propriété de Andreotti ludovic et sont des créations
            originales. @tout droits réservés
          </p>
        </div>
      </div>
    </>
  );
}
