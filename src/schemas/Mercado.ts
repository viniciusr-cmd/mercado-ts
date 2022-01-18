import { Schema, model } from "mongoose";

const MercadoSchema = new Schema(
  {
    item: String,
    preco: String,
  }
);

export default model("Mercado", MercadoSchema);
