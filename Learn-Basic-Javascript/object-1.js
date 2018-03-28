// var saudara = {
//     nama : 'Lasep Junata',
//     umur : 27,
//     pekerjaan: 'wiraswasta',
//     menikah: true,
//     pendidikan : ['SMA','SMP','SD'],
//     alamat: {
//         jalan: 'Jl. Swadaya No.2769',
//         kelurahan: 'Srijaya',
//         kecamatan: 'Alang-Alang Lebar',
//         kodepos: 30154
//     }
// }

// console.log("Nama :",saudara.nama)
// console.log("Umur :",saudara.umur)
// console.log("Pekerjaan :",saudara['pekerjaan'])
// console.log("Pendidikan :",saudara.pendidikan[0])
// console.log("Sudah Menikah :",saudara['menikah'])
// console.log("Alamat :",saudara.alamat.jalan,"Kelurahan",saudara['alamat']['kelurahan'],saudara.alamat.kodepos)

//literal
var mhs0 = {
	nama : 'faip mardoni',
	nik : '13142043',
	email : 'faipmardoni@gmail.com',
	prodi : 'teknik informatika'
}

console.log(mhs0);

//declaration
function buatObject(nama, nik, email, prodi) {
	var mhs = {};
	mhs.nama = nama;
	mhs.nik = nik;
	mhs.email = email;
	mhs.prodi = prodi;
	return mhs;
}
var mhs2 = buatObject('faip mardoni', '13142043', 'faipmardoni@gmail.com', 'teknik informatika')
console.log(mhs2)

//constructor   w
function Mahasiswa (nama, nik, email, prodi) {
	this.nama = nama;
	this.nik = nik;
	this.email = email;
	this.prodi = prodi;
}

var mhs3 = new Mahasiswa('faip mardoni', '13142043', 'faipmardoni@gmail.com', 'teknik informatika')
console.log(mhs3)