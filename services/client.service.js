import ClientRepository from "../repositories/client.repository.js";

async function createClient(client) {
  return await ClientRepository.insertClient(client);
}

async function getClients() {
  return await ClientRepository.getClients();
}

async function getClient(id) {
  return await ClientRepository.getClient(id);
}

async function updateClient(id, client) {
  return await ClientRepository.updateClient(id, client);
}

async function deleteClient(id) {
  return await ClientRepository.deleteClient(id);
}

export default {
  createClient,
  getClients,
  getClient,
  updateClient,
  deleteClient,
};
