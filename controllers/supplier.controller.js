import SupplierService from "../services/supplier.service.js";

async function createSupplier(req, res, next) {
  try {
    let supplier = req.body;
    if (
      !supplier.name ||
      !supplier.email ||
      !supplier.cnpj ||
      !supplier.phone ||
      !supplier.address
    ) {
      throw new Error("Missing required fields");
    }
    res.send(await SupplierService.createSupplier(supplier));
    logger.info(`POST /supplier - ${JSON.stringify(supplier)}`);
  } catch (err) {
    next(err);
  }
}

async function getSuppliers(req, res, next) {
  try {
    res.send(await SupplierService.getSuppliers());
    logger.info(`GET /suppliers`);
  } catch (err) {
    next(err);
  }
}

async function getSupplier(req, res, next) {
  try {
    res.send(await SupplierService.getSupplier(req.params.id));
    logger.info(`GET /supplier/${req.params.id}`);
  } catch (err) {
    next(err);
  }
}

async function updateSupplier(req, res, next) {
  try {
    let supplier = req.body;
    if (
      !supplier.name ||
      !supplier.email ||
      !supplier.cnpj ||
      !supplier.phone ||
      !supplier.address
    ) {
      throw new Error("Missing required fields");
    }
    res.send(await SupplierService.updateSupplier(req.params.id, supplier));
    logger.info(`PUT /supplier/${req.params.id} - ${JSON.stringify(supplier)}`);
  } catch (err) {
    next(err);
  }
}

async function deleteSupplier(req, res, next) {
  try {
    res.send(await SupplierService.deleteSupplier(req.params.id));
    logger.info(`DELETE /supplier/${req.params.id}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createSupplier,
  getSuppliers,
  getSupplier,
  updateSupplier,
  deleteSupplier,
};
