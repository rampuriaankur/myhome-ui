export async function handleResponse(response) {
  if (response.status === 200 || response.status === 201) {
    return response.json ? response.json() : null;
  } else if (response.status === 400) {
    const error = await response.text();
    throw new Error(error);
  } else if (response.status === 204 || response.status === 202) {
    return "";
  }
  throw new Error("Network response was not ok.");
}

// In a real app, would likely call an error logging service.
export function handleError(error) {
  // eslint-disable-next-line no-console
  console.error("API call failed. " + error);
  throw error;
}
