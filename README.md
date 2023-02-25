# Backend develop in Fractal MERN Trainee by Arnold Balabarca

This is basic but complete version of a backend. It includes API routes for categories, products, suppliers and tennants

![JavaScript](https://img.shields.io/badge/JavaScript-%23323330.svg?style=for-the-badge&logo=Javascript&logoColor=%23F7DF1E) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white) ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white) ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) 

## Highlights
- Services, models, routes were developed for categories, products, suppliers and tennants. As well as their corresponding data validation.
- Using [Seed Service](./src/services/seed.service.ts) I generated data for tables categories, products, suppliers and tennants. Using queries and [helper generators](./src/helpers).
- supplier and tennant interfaces were created using extens from ["person interface"](./src/interfaces/person.interface.ts). Also, I exported some functions from genPeople to genSupplier and genTenants.
- Database named "saleproductsdb_modified" was created using [this SQL script](createDB_modified.sql)
- In the database and backend is being used tables "categories", "products", "suppliers", and "tennants"
- In table "categories" is being used columns "categoryName" and "categoryParent_id" 
- In table "products" is being used columns "productName"

<!-- 

## Links

- Demo Link: [MEAR Trainee Fractal](https://mearn-trainee-fractal-frontend.netlify.app/) -->
