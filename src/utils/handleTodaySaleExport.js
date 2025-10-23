export const handleExport = (data) => {
  if (!data || !data.length) return;

  const headers = ["Title", "Value", "Actual Value", "Statistics"];
  const csvRows = [headers.join(",")];

  data.forEach((item) => {
    const row = [
      `"${item.title}"`,
      `"${item.value}"`,
      `"${item.actualValue || "-"}"`,
      `"${item.description}"`,
    ];
    csvRows.push(row.join(","));
  });

  const csvContent = csvRows.join("\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "today_sales.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
