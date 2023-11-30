/**
 * @returns {React.node}
 */

export function Legalmentions() {
  const legalmentionStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
    margin: "50px auto",
  };
  return (
    <>
      <div style={legalmentionStyle}>
        <div style={legalmentionStyle}>
          <h3 style={{ textDecoration: "underline" }}>Informations legales</h3>
          <span>Andreotti Ludovic</span>
          <p style={{ maxWidth: "600px", textAlign: "center" }}>
            72 rue alphonse daudet, 30210 Remoulins
            <p>06 42 53 39 53</p>
            <p>andr.ludow@gmail.com </p>
            siret : 85209615500019
          </p>
        </div>
        <div style={legalmentionStyle}>
          <h3 style={{ textDecoration: "underline", textAlign: "center" }}>
            Créateur du site internet
          </h3>
          <span>Andreotti Ludovic</span>
          contact : andr.ludow@gmail.com
        </div>
        <div style={legalmentionStyle}>
          <h3 style={{ textDecoration: "underline", textAlign: "center" }}>
            Hebergeur du site
          </h3>
          <span>OVH</span>
          <p style={{ maxWidth: "600px" }}>
            <p>
              SAS au capital de 10 174 560 € RCS Lille Métropole 424 761 419
              00045 Code APE 2620Z N° TVA : FR 22 424 761 419{" "}
            </p>
            Siège social : 2 rue Kellermann - 59100 Roubaix - France OVH SAS est
            une filiale de la société OVH Groupe SA, société immatriculée au RCS
            de Lille sous le numéro 537 407 926 sise 2, rue Kellermann, 59100
            Roubaix. Directeur de la publication : Michel Paulin Ce site est
            hébergé par OVH SAS 2 rue Kellermann - 59100 Roubaix - France
          </p>
        </div>
        <div style={legalmentionStyle}>
          <h3 style={{ textDecoration: "underline" }}>
            Propriété intellectuelle
          </h3>
          <p style={{ maxWidth: "600px" }}>
            Les images, dessins et autres créations utilisés dans ce site
            internet sont la propriété de "Andreotti ludovic" et constituent des
            créations originales. Tout droits réservés.
          </p>
        </div>
      </div>
    </>
  );
}
