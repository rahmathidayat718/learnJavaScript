
//set variable tugas 1
let nama
let saldoAwal
let saldoTambahan
let saldoAkhir
const hutang = 50000

//menentukan hari tugas 2
let today = new Date
let namaHari = ["senin", "selasa", "rabu", "kamis", "jumat", "sabtu", "minggu"]
let hariIni = namaHari[today.getDay()]

// prompt
nama = prompt ("masukan nama kamu")
saldoAwal = Number(prompt ("masukan saldo awal kamu"))
saldoTambahan = Number(prompt ("masukan saldo tambahan"))

saldoAkhir = saldoAwal + saldoTambahan - hutang

// alert(`${hariIni} \n Halo ${nama} saldo awal kamu adalah Rp.${saldoAwal} dan saldo tambahan kamu Rp.${saldoTambahan} dan kamu mempunyai hutang sebesar Rp.${hutang} jadi sisa saldo kamu adalah Rp.${saldoAkhir}`)

alert(`${hariIni}
Halo ${nama},
Saldo awal kamu: Rp.${saldoAwal.toLocaleString("id-ID")}
Saldo tambahan kamu: Rp.${saldoTambahan.toLocaleString("id-ID")}
Hutang kamu: Rp.${hutang.toLocaleString("id-ID")}
--------------------------
Sisa saldo kamu adalah: Rp.${saldoAkhir.toLocaleString("id-ID")}`);

