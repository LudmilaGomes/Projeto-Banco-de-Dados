import dotenv from 'dotenv';

dotenv.config();

export default {
  type: 'postgres',
  port: Number(process.env.TYPEORM_PORT),
  host: process.env.TYPEORM_HOST,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  autoLoadEntities: true,
  // logging: true,
  ssl: false,
  entities: ["src/models/**"],
  migrations: ["src/database/migrations/**"],
  cli: {
    migrationsDir: "src/database/migrations",
    entitiesDir: "src/models/",
  }
};

// export default {
//   type: "postgres",
//   port: 5432,
//   host: "localhost",
//   username: "postgres",
//   password: "caixapandora",
//   database: "projetonode",
//   logging: false,
//   entities: ['src/models/**/*.ts'],
//   migrations: ['src/database/migrations/**/*.ts'],
//   cli: {
//     migrationsDir: 'src/database/migrations',
//     entitiesDir: 'src/models',
//   },
// }