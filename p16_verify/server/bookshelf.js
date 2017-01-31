import knex from "knex";
import bookshelf from "bookshelf"; // OEM
import knexConfig from "../knexfile";

export default bookshelf(knex(knexConfig.development));

