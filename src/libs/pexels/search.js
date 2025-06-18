const API_KEY = "LnmmCa4XXK7e0lCobiw4YmsLzsWM14usOETKZdvNrHO1M8l1rtSvaiQB"; 

const API_URL = "https://api.pexels.com/v1"; 


export async function searchPhotos({ query, perPage = 16, page = 1 }) { // función asíncrona
  const url = `${API_URL}/search?query=${encodeURIComponent(query)}&per_page=${perPage}&page=${page}`; //  URL con parámetros
  const res = await fetch(url, {                                                   // petición 
    headers: {
      Authorization: API_KEY                                                      // enviamos la clave en el header
    }
  });
  if (!res.ok) {                                                                     //  comprobamos errores HTTP
    throw new Error(`Pexels API error: ${res.status}`);
  }
  const data = await res.json();                                                     // parseamos la respuesta JSON
  return data.photos;                                                                // devolvemos sólo el array `photos`
}