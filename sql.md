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

CREATE TABLE bourse_action
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
insert into   
```sql
INSERT INTO bourse_action (nom, type, prix_actuel, dividendes, dividendes_nb_1an, dividendes_mois_versement, dividendes_annual)
 VALUES
 ('EPR Properties', 'action', 42.89, 1, 12, 'janvier|fevrier|mars|avril|mai|juin|juillet|aout|septembre|octobre|novembre|decembre', 3.16 ),
 ('Nvidia', 'action', 123.8, 1, 4, 'mars|juin|septembre|decembre', 0.04),
 ('Vanguard S&P 500 UCITS ETF (USD) Acc', 'etf', 100.20, 0);
```
