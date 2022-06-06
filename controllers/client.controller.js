import ClientService from "../services/client.service.js";

async function createClient(req, res, next) {
  try {
    let client = req.body;
    if (
      !client.name ||
      !client.email ||
      !client.phone ||
      !client.email ||
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

export default {
  createClient,
};
