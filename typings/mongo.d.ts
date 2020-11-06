import { Model } from "mongoose";

interface CModel<T, Q> extends Model<T, Q> {}

type Entites =
  | "User"
  | "Permission"
  | "Role"
  | "Shop"
  | "Address"
  | "Warehouse"
  | "Product"
  | "ProductUnit"
  | "ProductCategory"
  | "ProductAttribute"
  | "ProductAttributeValue"
  | "ProductImport"
  | "ProductExport"
  | "ProductWarehouse"
  | "WarrantyPolicy"
  | "Warranty"
  | "Order"
  | "OrderItem"
  | "Discount"
  | "WarrantyPolicy"
  | "Warranty"
  | "Payment"
  | "Customer";

declare global {
  function getModel<T>(name: Entites) {
    return m as CModel<T, {}>;
  }
}
