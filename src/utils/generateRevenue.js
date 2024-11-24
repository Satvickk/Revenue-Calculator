export function generateRevenue(payload) {
  if (payload.currentRevenue < 0 || payload.growthRate < 0) {
    throw new Error("Current revenue and growth rate must be non-negative.");
  }

  const growthRateDecimal = payload.growthRate / 100;
  const predictions = [];
  let baseRevenue = payload.currentRevenue;
  let currentYear = getRevenueTimeFrame();

  for (let year = 1; year <= 5; year++) {
    const growthValue = baseRevenue * growthRateDecimal;
    baseRevenue += growthValue;
    predictions.push({
      baseValue: parseFloat(baseRevenue.toFixed(2)),
      growthValue: parseFloat(growthValue.toFixed(2)),
      currentYear: currentYear + year,
    });
  }

  return predictions;
}

export function getRevenueTimeFrame() {
  const currentYear = new Date().getFullYear();
  return currentYear;
}

export function generateTotalRevenue(GrowthData) {
  if (!GrowthData.length) return 0;

  const totalRevenue = GrowthData.filter(
    (item) => typeof item.baseValue === "number" && !isNaN(item.baseValue)
  ).reduce((acc, item) => acc + item.baseValue, 0);

  return totalRevenue.toFixed(2);
}

export function generateAverageGrowth(GrowthData) {
  if (GrowthData.length < 2) return 0;

  const growthRates = GrowthData.map((item, index) => {
    if (index === 0) return 0;
    const previousBaseValue = GrowthData[index - 1].baseValue;
    const growth =
      ((item.baseValue - previousBaseValue) / previousBaseValue) * 100;
    return growth;
  });

  const validGrowthRates = growthRates.slice(1);
  const totalGrowth = validGrowthRates.reduce((acc, rate) => acc + rate, 0);
  return (totalGrowth / validGrowthRates.length).toFixed(2);
}
