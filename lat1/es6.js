const mahasiswa = {
    nama: "Rizki",
    nim: "A11.2020.12345",
    umur: 20,
    jurusan: "Teknik Informatika",
    status: "true",
    hobby: ["mancing", "membaca"],
    matkul: [
        {
            matkulId: 4301,
            matkulNama: "pemsik",
            sks: 3,
            nilai: 85
        },
        {
            matkulId: 4302,
            matkulNama: "daspro",
            sks: 3,
            nilai: 90
        },
    ]
}

console.log(mahasiswa); 

// ES6 - Destructuring Obj

const {nama, nim, umur, jurusan, status, matkul, hobby} = mahasiswa;
console.log(nama + ' - ' + nim + ' - ' + jurusan + ' - ' + umur + ' - ' + status );

//ES6 - Template Literal
const [hobby1, hobby2] = hobby;
console.log(`hobby gwej adalah: ${hobby1} dan ${hobby2}`);

//ES5 - Spread Operator - Menggabungkan data yang sudah ada
const newHobby = "ngidol";

const updateHobby = [ ...hobby, newHobby, "roblox" ];
console.log(`我要 menginfo, 私のhobby in 2025 は: ${updateHobby}` );

//ES6 - function
const jumlah = (a,b) => a+b;

console.log(`berhitung yuk 1 + 2 = ${jumlah(1,2)}`);

//ES6 - logical => ?;, ||
const statusMhs = status ? "Aktif" : "Non-Ak";
console.log(`Statusku ${statusMhs}`);

const aktifMhs = mahasiswa.organisasi || "Mboten";
console.log(`Keikutsertaan Organisasi: ${aktifMhs}`);

//ES6 - Array Method (map, filter, reduce)
const namaMatkul = matkul.map((m) => m.matkulNama);
console.log(namaMatkul);

const listMhs = [
    { nim: '2012', nama: 'Abdul', status: true},
    { nim: '2013', nama: 'Bambang', status: true},
    { nim: '2014', nama: 'Cherry', status: false},
]

const mhsValid = listMhs.filter((m) => m.status);
console.log(mhsValid);

const totalSks = matkul.reduce((total, m) => total + m.sks, 0);
console.log(totalSks);