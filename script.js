function generateTable() {
  const input = document.getElementById("matchesInput").value.trim();
  const lines = input.split("\n");
  if (lines.length === 0 || !input) return;

  let tableHTML = "<table><tr><th>المباراة</th><th>الوقت</th></tr>";
  lines.forEach(line => {
    const [match, time] = line.split(" - ");
    if (match && time) {
      tableHTML += `<tr><td>${match.trim()}</td><td>${time.trim()}</td></tr>`;
    }
  });
  tableHTML += "</table>";

  document.getElementById("tableContainer").innerHTML = tableHTML;
  document.getElementById("codeOutput").value = tableHTML;
  document.getElementById("outputSection").style.display = "block";
}

function copyCode() {
  const code = document.getElementById("codeOutput");
  code.select();
  document.execCommand("copy");
  alert("✅ تم نسخ كود بلوجر!");
}

function copyHTML() {
  const html = document.getElementById("tableContainer").innerHTML;
  navigator.clipboard.writeText(html).then(() => {
    alert("✅ تم نسخ HTML الكامل!");
  });
}
