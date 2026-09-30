/**
 * Mock servislerin ağ gecikmesi. Gerçek bir API'nin yavaşlığını taklit eder;
 * böylece skeleton ve yükleniyor durumları demoda gerçekten görünür.
 */
export const simulateLatency = (minMs = 350, maxMs = 850) =>
  new Promise<void>((resolve) => setTimeout(resolve, minMs + Math.random() * (maxMs - minMs)));

/** AI üretimleri biraz daha uzun sürer; "düşünüyor" hissi verir. */
export const simulateAiLatency = () => simulateLatency(700, 1400);
