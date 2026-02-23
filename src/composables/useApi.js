import { ref } from "vue";

export function useApi(baseUrl) {
  const data = ref(null);
  const error = ref("");
  const loading = ref(false);

  const request = async (url, options) => {
    loading.value = true;
    error.value = "";
    try {
      const res = await fetch(url, options);
      if (!res.ok) {
        throw new Error(`Request failed: ${res.status} ${res.statusText}`);
      }
      const json = await res.json();
      data.value = json;
      return json;
    } catch (err) {
      error.value = err?.message ?? "Request failed";
      return null;
    } finally {
      loading.value = false;
    }
  };

  const getAll = () => request(baseUrl);

  const getOne = (id) => request(`${baseUrl}/${id}`);

  const update = (id, payload) =>
    request(`${baseUrl}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

  return {
    data,
    error,
    loading,
    getAll,
    getOne,
    update,
  };
}
