import LocalStorage from "./LocalStorage.js";

export default class ExportImportController {
  constructor() {
    this.init();
    this.localStorage = new LocalStorage();
  }

  init() {
    document.getElementById("export-btn").addEventListener("click", () => {
      this.exportDataToJsonFile();
    });
    document.getElementById("import-btn").addEventListener("click", () => {
      this.importJsonFile();
    });
  }
  exportDataToJsonFile() {
    let dataToExport = this.localStorage.getJsonData();

    let blob = new Blob([dataToExport], { type: "application/json" });
    let url = URL.createObjectURL(blob);
    let element = document.createElement("a");
    let currentDate = new Date();
    let dateString = currentDate.toISOString().slice(0, 10); // YYYY-MM-DD
    let fileName = `export-kanban-${dateString}.json`;
    element.href = url;
    element.download = fileName;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
  importJsonFile() {
    const input = document.getElementById("fileInput");
    const file = input.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        this.localStorage.setJsonData(content);
        window.location.reload();
      };

      reader.readAsText(file);
    } else {
      alert("Veuillez sélectionner un fichier.");
    }
  }
}
