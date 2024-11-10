import { useEffect } from 'react';
import { useState } from 'react';

export default function TaskTable({ tasks, setTasks, globalSettings }) {
    const [isClient, setIsClient] = useState(false);
    const [prevSettings, setPrevSettings] = useState(globalSettings);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const safeValue = (value, defaultValue = '') => {
        return value === null || value === undefined ? defaultValue : value;
    };

    // Добавляем функцию для безопасного получения числового значения
    const safeNumberValue = (value, defaultValue = 0) => {
        if (value === null || value === undefined || isNaN(value)) {
            return defaultValue;
        }
        return value;
    };

    // Функция для расчета стоимости задачи
    const calculateTaskCost = (task) => {
        const timeInHours = parseFloat(task.timeHours) + parseFloat(task.timeMinutes) / 60 || 0;
        const grossCost = timeInHours * parseFloat(task.hourlyRate || 0);
        const discountAmount = grossCost * (parseFloat(task.discount || 0) / 100);
        let taskCost = grossCost - discountAmount;

        // Всегда добавляем налог (даже если он 0)
        const tax = taskCost * (parseFloat(globalSettings.taxRate || 0) / 100);
        taskCost += tax;

        return task.free ? 0 : taskCost.toFixed(2);
    };

    // Обновляем задачи при изменении глобальных настроек
    useEffect(() => {
        const updatedTasks = tasks.map(task => {
            let newTask = { ...task };
            let needsUpdate = false;

            // Проверяем, нужно ли обновить hourlyRate
            if (task.hourlyRate === prevSettings.hourlyRate) {
                newTask.hourlyRate = globalSettings.hourlyRate;
                needsUpdate = true;
            }

            // Проверяем, нужно ли обновить discount
            if (task.discount === prevSettings.globalDiscount) {
                newTask.discount = globalSettings.globalDiscount;
                needsUpdate = true;
            }

            // Пересчитываем стоимость при любом изменении налога или если нужно обновить другие значения
            if (needsUpdate || prevSettings.taxRate !== globalSettings.taxRate) {
                newTask.cost = calculateTaskCost(newTask);
            }

            return newTask;
        });

        setTasks(updatedTasks);
        setPrevSettings(globalSettings);
    }, [globalSettings]);

    const addTask = () => {
        const newTask = {
            description: '',
            timeHours: 0,
            timeMinutes: 0,
            hourlyRate: safeNumberValue(globalSettings.hourlyRate),
            discount: safeNumberValue(globalSettings.globalDiscount),
            cost: '0.00',
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

                // Пересчитываем стоимость если изменились связанные поля
                if (['timeHours', 'timeMinutes', 'hourlyRate', 'discount', 'free'].includes(field)) {
                    updatedTask.cost = calculateTaskCost(updatedTask);
                }

                return updatedTask;
            }
            return task;
        });

        setTasks(updatedTasks);
    };

    const getCurrencySymbol = (currencyCode) => {
        const currencies = {
            'USD': '$',
            'EUR': '€',
            'GBP': '£',
            'NIS': '₪'
        };
        return currencies[currencyCode] || '$';
    };

    // Модифицируем рендер с учетом проверки на клиентский рендеринг
    if (!isClient) {
        return (
            <div>
                <h2 className="mt-4">Tasks</h2>
                <div className="table-responsive">
                    <table className="table table-bordered table-striped" id="taskTable">
                        <thead className="thead-dark d-none d-md-table-header-group">
                            <tr>
                                <th>Task Description</th>
                                <th>Time (hours:minutes)</th>
                                <th>Hourly Rate ({getCurrencySymbol(globalSettings.currency)})</th>
                                <th>Discount (%)</th>
                                <th>Cost ({getCurrencySymbol(globalSettings.currency)})</th>
                                <th>Free Task</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Пустая таблица для серверного рендеринга */}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    return (
        <div>
            <h2 className="mt-4">Tasks</h2>
            <div className="table-responsive">
                <table className="table table-bordered table-striped" id="taskTable">
                    <thead className="thead-dark d-none d-md-table-header-group">
                        <tr>
                            <th>Task Description</th>
                            <th>Time (hours:minutes)</th>
                            <th>Hourly Rate ({getCurrencySymbol(globalSettings.currency)})</th>
                            <th>Discount (%)</th>
                            <th>Cost ({getCurrencySymbol(globalSettings.currency)})</th>
                            <th>Free Task</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task, index) => (
                            <tr key={index} className="task-row">
                                <td>
                                    <div className="form-group">
                                        <label className="d-md-none">Task Description</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={safeValue(task.description)}
                                            onChange={(e) => updateTask(index, 'description', e.target.value)}
                                            placeholder="Task description"
                                            aria-label="Task description"
                                        />
                                    </div>
                                </td>
                                <td>
                                    <div className="form-group">
                                        <label className="d-md-none">Time (hours:minutes)</label>
                                        <div className="d-flex align-items-center">
                                            <input
                                                type="number"
                                                className="form-control"
                                                style={{ width: '60px' }}
                                                value={safeNumberValue(task.timeHours)}
                                                onChange={(e) => updateTask(index, 'timeHours', parseFloat(e.target.value) || 0)}
                                                min="0"
                                                placeholder="Hrs"
                                                aria-label="Hours"
                                            />
                                            <span className="mx-2">:</span>
                                            <input
                                                type="number"
                                                className="form-control"
                                                style={{ width: '60px' }}
                                                value={safeNumberValue(task.timeMinutes)}
                                                onChange={(e) => updateTask(index, 'timeMinutes', parseFloat(e.target.value) || 0)}
                                                min="0"
                                                max="60"
                                                placeholder="Min"
                                                aria-label="Minutes"
                                            />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="form-group">
                                        <label className="d-md-none">Hourly Rate ({getCurrencySymbol(globalSettings.currency)})</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            value={safeNumberValue(task.hourlyRate)}
                                            onChange={(e) => updateTask(index, 'hourlyRate', parseFloat(e.target.value) || 0)}
                                            placeholder="Hourly rate"
                                            min="0"
                                            aria-label="Hourly rate"
                                        />
                                    </div>
                                </td>
                                <td>
                                    <div className="form-group">
                                        <label className="d-md-none">Discount (%)</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            value={safeNumberValue(task.discount)}
                                            onChange={(e) => updateTask(index, 'discount', parseFloat(e.target.value) || 0)}
                                            placeholder="Discount"
                                            min="0"
                                            max="100"
                                            aria-label="Discount percentage"
                                        />
                                    </div>
                                </td>
                                <td>
                                    <div className="form-group">
                                        <label className="d-md-none">Cost ({getCurrencySymbol(globalSettings.currency)})</label>
                                        <span className="form-control-plaintext">
                                            {getCurrencySymbol(globalSettings.currency)}{safeValue(task.cost, '0.00')}
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <div className="form-group">
                                        <label className="d-md-none">Free Task</label>
                                        <div className="form-check">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                checked={!!task.free}
                                                onChange={(e) => updateTask(index, 'free', e.target.checked)}
                                                aria-label="Free task"
                                            />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="btn-group" role="group" aria-label="Task actions">
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => deleteTask(index)}
                                            aria-label="Delete task"
                                        >
                                            Delete
                                        </button>
                                        <button
                                            className="btn btn-secondary btn-sm ms-2"
                                            onClick={() => duplicateTask(index)}
                                            aria-label="Duplicate task"
                                        >
                                            Duplicate
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="text-end mb-3">
                <button className="btn btn-primary" onClick={addTask}>
                    Add Task
                </button>
            </div>
        </div>
    );
}
