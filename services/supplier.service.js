import SupplierRepository from "../repositories/supplier.repository.js";

async function createSupplier(supplier) {
  return await SupplierRepository.insertSupplier(supplier);
}

async function getSuppliers() {
  return await SupplierRepository.getSuppliers();
}

async function getSupplier(id) {
  return await SupplierRepository.getSupplier(id);
}

async function updateSupplier(id, supplier) {
  return await SupplierRepository.updateSupplier(id, supplier);
}

async function deleteSupplier(id) {
  return await SupplierRepository.deleteSupplier(id);
}

export default {
  createSupplier,
  getSuppliers,
  getSupplier,
  updateSupplier,
  deleteSupplier,
};