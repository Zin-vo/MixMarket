function searchAll() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const resultsBox = document.getElementById("searchResults");
  resultsBox.innerHTML = "";

  if (input === "") return;

  searchData.forEach(item => {
    if (item.name.toLowerCase().includes(input)) {
      const div = document.createElement("div");
      div.innerHTML = `<a href="${item.url}">${item.name}</a>`;
      resultsBox.appendChild(div);
    }
  });
}
