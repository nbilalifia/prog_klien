let listmahasiswa = [
  {
    nama: "Rizki",
    nim: "A11.2020.12345",
    umur: 20,
    jurusan: "Teknik Informatika",
    status: "true",
    hobby: ["mancing", "membaca"],
    matkul: [
      { matkulId: 4301, matkulNama: "pemsik", sks: 3, nilai: 85 },
      { matkulId: 4302, matkulNama: "daspro", sks: 3, nilai: 90 },
    ],
  },
  {
    nama: "Lina",
    nim: "A11.2020.67890",
    umur: 21,
    jurusan: "Sistem Informasi",
    status: "true",
    hobby: ["berkebun", "memasak"],
    matkul: [
      { matkulId: 4303, matkulNama: "basis data", sks: 3, nilai: 88 },
      { matkulId: 4304, matkulNama: "jaringan komputer", sks: 3, nilai: 92 },
    ],
  },
];

const show = () => {
  listmahasiswa.forEach((m, i) => {
    const aktif = String(m.status).toLowerCase() === "true";
    console.log(`#${i + 1} ${m.nama} (${m.nim})`);
    console.log(`   Umur: ${m.umur} | Jurusan: ${m.jurusan} | Status: ${aktif ? "Aktif" : "Tidak Aktif"}`);
    console.log(`   Hobi : ${(m.hobby || []).join(", ") || "-"}`);
    console.log("   Mata Kuliah:");
    (m.matkul || []).forEach((mk, j) => {
      const s = typeof mk.nilai === "number"
        ? mk.nilai
        : (() => {
            const t = mk.tugas ?? null, u = mk.uts ?? null, a = mk.uas ?? null;
            let sum = 0, w = 0;
            if (t != null) { sum += t * 0.3; w += 0.3; }
            if (u != null) { sum += u * 0.3; w += 0.3; }
            if (a != null) { sum += a * 0.4; w += 0.4; }
            return w ? +(sum / w).toFixed(2) : 0;
          })();
      const g = s >= 85 ? "A" : s >= 75 ? "B" : s >= 65 ? "C" : s >= 50 ? "D" : "E";
      console.log(`     ${j + 1}. [${mk.matkulId}] ${mk.matkulNama} — ${mk.sks} SKS — Nilai: ${s} (${g})`);
    });
  });
};


const add = (m) => {
  if (!m?.nim) return console.warn("NIM wajib."), false;
  if (listmahasiswa.some(x => x.nim === m.nim)) return console.warn(`NIM ${m.nim} sudah ada.`), false;
  listmahasiswa.push(m);
  return true;
};

const update = (nim, dataBaru) => {
  listmahasiswa = listmahasiswa.map(m =>
    m.nim === String(nim) ? ({ ...m, ...dataBaru }) : m
  );
};

const deleteById = (nim) => {
  const n0 = listmahasiswa.length;
  listmahasiswa = listmahasiswa.filter(m => m.nim !== String(nim));
  return listmahasiswa.length !== n0;
};

const totalNilai = (nim) => {
  const m = listmahasiswa.find(x => x.nim === String(nim));
  if (!m) return console.warn(`NIM ${nim} tidak ditemukan.`), null;
  const det = (m.matkul || []).map(mk => {
    const s = typeof mk.nilai === "number"
      ? mk.nilai
      : (() => {
          const t = mk.tugas ?? null, u = mk.uts ?? null, a = mk.uas ?? null;
          let sum = 0, w = 0;
          if (t != null) { sum += t * 0.3; w += 0.3; }
          if (u != null) { sum += u * 0.3; w += 0.3; }
          if (a != null) { sum += a * 0.4; w += 0.4; }
          return w ? +(sum / w).toFixed(2) : 0;
        })();
    return { matkulId: mk.matkulId, matkulNama: mk.matkulNama, sks: mk.sks, skor: s };
  });
  const avg = det.length ? +(det.reduce((a, b) => a + b.skor, 0) / det.length).toFixed(2) : 0;
  console.table(det);
  console.log(`Rata-rata nilai ${m.nama}: ${avg}`);
  return { avg, detail: det };
};

const kategoriNilai = (nim) => {
  const m = listmahasiswa.find(x => x.nim === String(nim));
  if (!m) return console.warn(`NIM ${nim} tidak ditemukan.`), null;
  const groups = { A:0, B:0, C:0, D:0, E:0 };
  const det = (m.matkul || []).map(mk => {
    const s = typeof mk.nilai === "number"
      ? mk.nilai
      : (() => {
          const t = mk.tugas ?? null, u = mk.uts ?? null, a = mk.uas ?? null;
          let sum = 0, w = 0;
          if (t != null) { sum += t * 0.3; w += 0.3; }
          if (u != null) { sum += u * 0.3; w += 0.3; }
          if (a != null) { sum += a * 0.4; w += 0.4; }
          return w ? +(sum / w).toFixed(2) : 0;
        })();
    const g = s >= 85 ? "A" : s >= 75 ? "B" : s >= 65 ? "C" : s >= 50 ? "D" : "E";
    groups[g]++;
    return { matkulId: mk.matkulId, matkulNama: mk.matkulNama, skor: s, grade: g };
  });
  console.table(det);
  console.log("Kategori:", groups);
  return { groups, detail: det };
};

const IPS = (nim) => {
  const m = listmahasiswa.find(x => x.nim === String(nim));
  if (!m) return console.warn(`NIM ${nim} tidak ditemukan.`), null;
  let totalMutu = 0, totalSKS = 0;
  const det = (m.matkul || []).map(mk => {
    const s = typeof mk.nilai === "number"
      ? mk.nilai
      : (() => {
          const t = mk.tugas ?? null, u = mk.uts ?? null, a = mk.uas ?? null;
          let sum = 0, w = 0;
          if (t != null) { sum += t * 0.3; w += 0.3; }
          if (u != null) { sum += u * 0.3; w += 0.3; }
          if (a != null) { sum += a * 0.4; w += 0.4; }
          return w ? +(sum / w).toFixed(2) : 0;
        })();
    const g = s >= 85 ? "A" : s >= 75 ? "B" : s >= 65 ? "C" : s >= 50 ? "D" : "E";
    const p = g === "A" ? 4 : g === "B" ? 3 : g === "C" ? 2 : g === "D" ? 1 : 0;
    const sks = Number(mk.sks || 0);
    const mutu = p * sks;
    totalMutu += mutu; totalSKS += sks;
    return { matkulId: mk.matkulId, matkulNama: mk.matkulNama, sks, skor: s, grade: g, mutu };
  });
  const ips = totalSKS ? +(totalMutu / totalSKS).toFixed(2) : 0;
  console.table(det);
  console.log(`IPS ${m.nama} (${m.nim}) = ${ips}`);
  return { ips, totalMutu, totalSKS, detail: det };
};

const clear = () => { listmahasiswa = []; };

const jumlahMahasiswa = () => listmahasiswa.length;

const sortByNIM = (asc = true) =>
  [...listmahasiswa].sort((a, b) =>
    asc ? a.nim.localeCompare(b.nim) : b.nim.localeCompare(a.nim)
  );

const sortByStatus = () => {
  const b = v => String(v).toLowerCase() === "true";
  return [...listmahasiswa].sort(
    (a, c) => Number(b(c.status)) - Number(b(a.status)) || a.nim.localeCompare(c.nim)
  );
};

const jumlahAktifTidak = () => {
  let aktif = 0;
  listmahasiswa.forEach(m => { if (String(m.status).toLowerCase() === "true") aktif++; });
  return { aktif, tidak: listmahasiswa.length - aktif };
};

const clearArray = () => { listmahasiswa = []; };

console.log("\n=== Data Awal ===\n"); show();

add({
  nama: "Nadia",
  nim: "A11.2021.55555",
  umur: 20,
  jurusan: "Teknik Informatika",
  status: false,
  hobby: ["menulis", "badminton"],
  matkul: [
    { matkulId: 4305, matkulNama: "PBO", sks: 3, nilai: 88 },
    { matkulId: 4306, matkulNama: "PTI", sks: 2, nilai: 90 },
  ],
});

update("A11.2020.67890", { jurusan: "Informatika" });

console.log("\n=== Data setelah ditambahkan dan diupdate ===\n"); show();

console.log("\n=== totalNilai / kategoriNilai / IPS (Rizki) ===");
totalNilai("A11.2020.12345");
kategoriNilai("A11.2020.12345");
IPS("A11.2020.12345");

console.log("\n=== jumlahMahasiswa, sortByNIM, sortByStatus, jumlahAktifTidak ===");
console.log("Jumlah:", jumlahMahasiswa());
console.table(sortByNIM().map(({ nim, nama }) => ({ nim, nama })));
console.table(sortByStatus().map(m => ({ nim: m.nim, status: String(m.status).toLowerCase() === "true" })));
console.log("Aktif/Tidak:", jumlahAktifTidak());
