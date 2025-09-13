export const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
};

export const calculateHoursUsed = (sessionTime: number) => {
  return Math.round((sessionTime / 3600) * 100) / 100;
};
