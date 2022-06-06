import ClientService from "../services/client.service.js";

async function createClient(req, res, next) {
  try {
    let client = req.body;
    if (
      !client.name ||
      !client.email ||
      !client.cpf ||
      !client.phone ||
      !client.address
    ) {
      throw new Error("Missing required fields");
    }
    res.send(await ClientService.createClient(client));
    logger.info(`POST /client - ${JSON.stringify(client)}`);
  } catch (err) {
    next(err);
  }
}

async function getClients(req, res, next) {
  try {
    res.send(await ClientService.getClients());
    logger.info(`GET /clients`);
  } catch (err) {
    next(err);
  }
}

async function getClient(req, res, next) {
  try {
    res.send(await ClientService.getClient(req.params.id));
    logger.info(`GET /client/${req.params.id}`);
  } catch (err) {
    next(err);
  }
}

async function updateClient(req, res, next) {
  try {
    let client = req.body;
    if (
      !client.name ||
      !client.email ||
      !client.cpf ||
      !client.phone ||
      !client.address
    ) {
      throw new Error("Missing required fields");
    }
    res.send(await ClientService.updateClient(req.params.id, client));
    logger.info(`PUT /client/${req.params.id} - ${JSON.stringify(client)}`);
  } catch (err) {
    next(err);
  }
}

async function deleteClient(req, res, next) {
  try {
    res.send(await ClientService.deleteClient(req.params.id));
    logger.info(`DELETE /client/${req.params.id}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createClient,
  getClients,
  getClient,
  updateClient,
  deleteClient,
};
