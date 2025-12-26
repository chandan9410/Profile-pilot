module.exports = function checkAlert(current, base, percent) {
  const change = ((current - base) / base) * 100;

  if (change >= percent) return "UP 🚀";
  if (change <= -percent) return "DOWN 🔻";
  return null;
};
