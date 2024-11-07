import { useEffect, useRef } from 'react';

export default function TaskTable({ tasks, setTasks, globalSettings }) {
    const initialLoad = useRef(true);

    // Загрузка данных из локального хранилища при загрузке
    useEffect(() => {
        if (initialLoad.current) {
            const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
            setTasks(savedTasks);
            initialLoad.current = false;
        }
    }, [setTasks]);

    // Сохранение задач в локальное хранилище при изменении задач
    useEffect(() => {
        if (!initialLoad.current) {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }, [tasks]);

    // Пересчет задач при изменении глобальных настроек
    useEffect(() => {
        const updatedTasks = tasks.map(task => {
            let newHourlyRate = task.hourlyRate;
            let newDiscount = task.discount;

            // Обновляем только если значение совпадает с глобальными настройками (не было изменено вручную)
            if (task.hourlyRate === globalSettings.previousHourlyRate) {
                newHourlyRate = globalSettings.hourlyRate;
            }
            if (task.discount === globalSettings.previousGlobalDiscount) {
                newDiscount = globalSettings.globalDiscount;
            }

            // Рассчитываем стоимость задачи
            const timeInHours = parseFloat(task.timeHours) + parseFloat(task.timeMinutes) / 60 || 0;
            const grossCost = timeInHours * newHourlyRate;
            const discountAmount = grossCost * (newDiscount / 100);
            let taskCost = grossCost - discountAmount;

            if (globalSettings.includeTaxInCost) {
                const tax = taskCost * (globalSettings.taxRate / 100);
                taskCost += tax;
            }

            return {
                ...task,
                hourlyRate: newHourlyRate,
                discount: newDiscount,
                cost: task.free ? 0 : taskCost.toFixed(2),
            };
        });

        setTasks(updatedTasks);
    }, [globalSettings, setTasks]);

    const addTask = () => {
        const newTask = {
            description: '',
            timeHours: 0,
            timeMinutes: 0,
            hourlyRate: globalSettings.hourlyRate || 0,
            discount: globalSettings.globalDiscount || 0,
            cost: 0,
            free: false,
        };
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
        setTasks(updatedTasks);
    };

    const duplicateTask = (index) => {
        const taskToDuplicate = tasks[index];
        setTasks([...tasks, { ...taskToDuplicate }]);
    };

    const updateTask = (index, field, value) => {
        const updatedTasks = tasks.map((task, taskIndex) => {
            if (taskIndex === index) {
                const updatedTask = { ...task, [field]: value };

                // Автоматический пересчет стоимости
                if (['timeHours', 'timeMinutes', 'hourlyRate', 'discount'].includes(field)) {
                    const timeInHours = parseFloat(updatedTask.timeHours) + parseFloat(updatedTask.timeMinutes) / 60 || 0;
                    const grossCost = timeInHours * parseFloat(updatedTask.hourlyRate || 0);
                    const discountAmount = grossCost * (parseFloat(updatedTask.discount || 0) / 100);
                    let taskCost = grossCost - discountAmount;

                    if (globalSettings.includeTaxInCost) {
                        const tax = taskCost * (globalSettings.taxRate / 100);
                        taskCost += tax;
                    }

                    updatedTask.cost = updatedTask.free ? 0 : taskCost.toFixed(2);
                }

                return updatedTask;
            }
            return task;
        });

        setTasks(updatedTasks);
    };

    return (
        <div>
            <h2 className="mt-4">Tasks</h2>
            <table className="table table-bordered table-striped" id="taskTable">
                <thead className="thead-dark">
                <tr>
                    <th>Task Description</th>
                    <th>Time (hours:minutes)</th>
                    <th>Hourly Rate ($)</th>
                    <th>Discount (%)</th>
                    <th>Cost ($)</th>
                    <th>Free Task</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {tasks.map((task, index) => (
                    <tr key={index}>
                        <td>
                            <input
                                type="text"
                                className="form-control"
                                value={task.description}
                                onChange={(e) => updateTask(index, 'description', e.target.value)}
                                placeholder="Task description"
                            />
                        </td>
                        <td>
                            <div className="form-inline">
                                <input
                                    type="number"
                                    className="form-control mr-2"
                                    style={{ width: '60px' }}
                                    value={task.timeHours}
                                    onChange={(e) => updateTask(index, 'timeHours', parseFloat(e.target.value))}
                                    min="0"
                                    placeholder="Hrs"
                                />
                                <span>:</span>
                                <input
                                    type="number"
                                    className="form-control ml-2"
                                    style={{ width: '60px' }}
                                    value={task.timeMinutes}
                                    onChange={(e) => updateTask(index, 'timeMinutes', parseFloat(e.target.value))}
                                    min="0"
                                    max="60"
                                    placeholder="Min"
                                />
                            </div>
                        </td>
                        <td>
                            <input
                                type="number"
                                className="form-control"
                                value={task.hourlyRate}
                                onChange={(e) => updateTask(index, 'hourlyRate', parseFloat(e.target.value))}
                                placeholder="Hourly rate"
                                min="0"
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                className="form-control"
                                value={task.discount}
                                onChange={(e) => updateTask(index, 'discount', parseFloat(e.target.value))}
                                placeholder="Discount"
                                min="0"
                                max="100"
                            />
                        </td>
                        <td>
                            <span>${task.cost}</span>
                        </td>
                        <td className="text-center">
                            <input
                                type="checkbox"
                                checked={task.free}
                                onChange={(e) => updateTask(index, 'free', e.target.checked)}
                            />
                        </td>
                        <td>
                            <button
                                className="btn btn-danger btn-sm mr-2"
                                onClick={() => deleteTask(index)}
                            >
                                Delete
                            </button>
                            <button
                                className="btn btn-secondary btn-sm"
                                onClick={() => duplicateTask(index)}
                            >
                                Duplicate
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className="text-right mb-3">
                <button className="btn btn-primary" onClick={addTask}>
                    Add Task
                </button>
            </div>
        </div>
    );
}
