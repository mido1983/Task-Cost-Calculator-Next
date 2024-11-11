export const calculateTaskCost = (task: any, settings: any): number => {
  if (task.free) return 0;

  const timeInHours = Number(task.timeHours) + Number(task.timeMinutes) / 60;
  const grossCost = timeInHours * Number(task.hourlyRate || 0);
  const discountAmount = grossCost * (Number(task.discount || 0) / 100);
  let taskCost = grossCost - discountAmount;

  if (settings.includeTaxInCost) {
    const tax = taskCost * (Number(settings.taxRate || 0) / 100);
    taskCost += tax;
  }

  return Number(taskCost.toFixed(2));
};

export const calculateTotalCost = (tasks: any[], settings: any) => {
  const totalGrossCost = tasks.reduce((acc, task) => {
    if (!task.free) {
      return acc + calculateTaskCost(task, settings);
    }
    return acc;
  }, 0);

  return Number(totalGrossCost.toFixed(2));
}; 