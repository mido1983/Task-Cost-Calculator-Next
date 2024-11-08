import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export default function Summary({ tasks, clientData, globalSettings }) {
    // Подсчет общего времени и стоимости
    const totalPaidTime = tasks.reduce((acc, task) => {
        if (!task.free) {
            return acc + parseFloat(task.timeHours) + parseFloat(task.timeMinutes) / 60;
        }
        return acc;
    }, 0);

    const totalFreeTime = tasks.reduce((acc, task) => {
        if (task.free) {
            return acc + parseFloat(task.timeHours) + parseFloat(task.timeMinutes) / 60;
        }
        return acc;
    }, 0);

    // Расчет стоимости с учетом налога
    const totalGrossCost = tasks.reduce((acc, task) => {
        if (!task.free) {
            const timeInHours = parseFloat(task.timeHours) + parseFloat(task.timeMinutes) / 60 || 0;
            return acc + timeInHours * parseFloat(task.hourlyRate || 0);
        }
        return acc;
    }, 0);

    const totalDiscountValue = tasks.reduce((acc, task) => {
        if (!task.free) {
            const timeInHours = parseFloat(task.timeHours) + parseFloat(task.timeMinutes) / 60 || 0;
            const grossCost = timeInHours * parseFloat(task.hourlyRate || 0);
            const discount = parseFloat(task.discount || 0);
            return acc + grossCost * (discount / 100);
        }
        return acc;
    }, 0);

    const subtotal = totalGrossCost - totalDiscountValue;
    const taxRate = parseFloat(globalSettings?.taxRate || 0);
    const taxAmount = subtotal * (taxRate / 100);
    const totalPayableAmount = subtotal + taxAmount;

    const exportPDF = () => {
        const doc = new jsPDF();

        // Заголовок
        doc.setFontSize(18);
        doc.text('Task Cost Summary', 14, 20);

        // Данные клиента
        doc.setFontSize(12);
        doc.text('Client Information:', 14, 30);
        doc.setFontSize(10);
        doc.text(`Name: ${clientData.name || 'N/A'}`, 14, 40);
        doc.text(`Email: ${clientData.email || 'N/A'}`, 14, 45);
        doc.text(`Phone: ${clientData.phone || 'N/A'}`, 14, 50);
        doc.text(`Address: ${clientData.address || 'N/A'}`, 14, 55);

        // Таблица задач
        autoTable(doc, {
            startY: 65,
            head: [['Task Description', 'Time (hrs:min)', 'Hourly Rate', 'Discount', 'Cost', 'Free']],
            body: tasks.map((task) => [
                task.description || 'N/A',
                `${task.timeHours}:${task.timeMinutes}`,
                `$${task.hourlyRate}`,
                `${task.discount}%`,
                `$${task.cost}`,
                task.free ? 'Yes' : 'No',
            ]),
            theme: 'grid',
        });

        // Финансовая информация под таблицей
        const finalY = doc.previousAutoTable.finalY + 10;
        doc.setFontSize(12);
        doc.text('Summary:', 14, finalY);
        doc.text(`Total Paid Time: ${totalPaidTime.toFixed(2)} hours`, 14, finalY + 10);
        doc.text(`Total Free Time: ${totalFreeTime.toFixed(2)} hours`, 14, finalY + 15);
        doc.text(`Total Gross Cost: $${totalGrossCost.toFixed(2)}`, 14, finalY + 20);
        doc.text(`Total Discount: $${totalDiscountValue.toFixed(2)}`, 14, finalY + 25);
        doc.text(`Subtotal: $${subtotal.toFixed(2)}`, 14, finalY + 30);
        doc.text(`Tax (${taxRate}%): $${taxAmount.toFixed(2)}`, 14, finalY + 35);
        doc.setFont('helvetica', 'bold');
        doc.text(`Total Payable Amount: $${totalPayableAmount.toFixed(2)}`, 14, finalY + 40);

        doc.save('Task_Cost_Summary.pdf');
    };

    return (
        <div className="summary bg-light p-3 mt-4">
            <h4>Summary</h4>
            <p>Total Time for Paid Tasks: <span>{totalPaidTime.toFixed(2)}</span> hours</p>
            <p>Total Time for Free Tasks: <span>{totalFreeTime.toFixed(2)}</span> hours</p>
            <p>Total Cost (before discounts): $<span>{totalGrossCost.toFixed(2)}</span></p>
            <p>Total Discount Given: $<span>{totalDiscountValue.toFixed(2)}</span></p>
            <p>Subtotal: $<span>{subtotal.toFixed(2)}</span></p>
            <p>Tax ({taxRate}%): $<span>{taxAmount.toFixed(2)}</span></p>
            <p><strong>Total Payable Amount: $<span>{totalPayableAmount.toFixed(2)}</span></strong></p>
            <button className="btn btn-info mt-3" onClick={exportPDF}>
                Export to PDF
            </button>
        </div>
    );
}
