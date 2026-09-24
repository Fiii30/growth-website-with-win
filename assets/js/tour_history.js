const data = [
    { name: "Jejak Roda Tua", city: "Bandung", member: 24 },
    { name: "Pesisir Senja", city: "Pangandaran", member: 18 },
    { name: "Kelana Kota Gudeg", city: "Yogyakarta", member: 31 },
    { name: "Kabut Pagi", city: "Bogor", member: 15 },
    { name: "Atap Langit", city: "Puncak", member: 27 },
    { name: "Jalur Selatan", city: "Sukabumi", member: 12 },
    { name: "Tapak Banten", city: "Banten", member: 20 },
    { name: "Lintas Pantura", city: "Cirebon", member: 16 },
    { name: "Kelana Priangan", city: "Garut", member: 22 },
    { name: "Aspal Karawang", city: "Karawang", member: 10 }
];

const touringTable = document.getElementById("touringTable");
const searchInput = document.getElementById("searchInput");
const averageMember = document.getElementById("averageMember");

function renderData(data) {

    touringTable.innerHTML = data.map(function(touring, index) {
        return `
            <tr>
                <td>${index + 1}</td>
                <td>${touring.name}</td>
                <td>${touring.city}</td>
                <td>${touring.member} orang</td>
            </tr>
        `;
    }).join("");

    const totalMember = data.reduce(function(total, touring) {
        return total + touring.member;
    }, 0);

    const average = data.length > 0
        ? totalMember / data.length
        : 0;

    averageMember.textContent = average.toFixed(1);
}

searchInput.addEventListener("input", function() {

    const keyword = searchInput.value.toLowerCase();

    const filteredData = data.filter(function(touring) {
        return touring.name.toLowerCase().startsWith(keyword) ||
        touring.city.toLowerCase().startsWith(keyword);
    });

    renderData(filteredData);
});

renderData(data);