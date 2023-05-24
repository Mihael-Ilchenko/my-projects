import { createModalError } from './createModalError.js';

export async function getClient() {
  try {
    const response = await fetch("http://localhost:3000/api/clients", {
      method: "GET",
    });
    const request = await response.json();

    return request;
  } catch (error) {
    createModalError(error);
  }
}

export async function sendClientObj(client, method, id = null) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/clients/${method === "POST" ? "" : id}`,
      { method, body: JSON.stringify(client) }
    );
    const request = await response.json();

    return request;
  } catch (error) {
    createModalError(error);
  }
}

export async function deleteClientItem(id) {
  try {
    await fetch(`http://localhost:3000/api/clients/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    createModalError(error);
  }
}

export async function foundClient(value) {

  try {
    const response = await fetch(`http://localhost:3000/api/clients?search=${value}`, {
      method: "GET",
    });
    const request = await response.json();

    return request;
  } catch (error) {
    createModalError(error);
    
  }
}