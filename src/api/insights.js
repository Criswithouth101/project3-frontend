import apiClient from "./apiClient";


export function getInsights() {
  return apiClient.get("/insights");
}

export function getInsight(id) {
  return apiClient.get(`/insights/${id}`);
}


export function createInsight(data, token) {
  return apiClient.post("/insights", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
}


export function updateInsight(id, data, token) {
  return apiClient.put(`/insights/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
}


export function deleteInsight(id, token) {
  return apiClient.delete(`/insights/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}
