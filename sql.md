# sql
database finance
tableau bourse
dividendes
```sql
CREATE TABLE bourse_portefeuille
(
id INT PRIMARY KEY NOT NULL,
borker_nom VARCHAR(100),
broker_type VARCHAR(100),
nom_action VARCHAR(100),
prix_achat INT,
date_achat DATE,
quantité INT
);

CREATE TABLEbourse_action
(
id INT PRIMARY KEY NOT NULL,
nom VARCHAR(100),
type VARCHAR(100),
prix_actuel INT,
dividendes BOOL,
dividendes_nb_1an INT,
dividendes_mois_versement VARCHAR(100),
dividendes_annual INT
);

```
