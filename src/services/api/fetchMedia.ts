import { API_TOKEN } from '.'

export async function fetchMedia<T> ({ apiURL }: { apiURL: string }): Promise<T> {
  try {
    const res = await fetch(`${apiURL}`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_TOKEN}`
      }
    })

    if (!res.ok) {
      throw new Error(`Error ${res.status}: No se pudo obtener la información desde ${apiURL}`)
    }

    const data = await res.json() as T
    return data
  } catch (err) {
    if (err instanceof Error) {
      throw err
    } else {
      throw new Error('An unknown error occurred while trying to obtain the resource data.')
    }
  }
}
