const students = [{ name: "Alice" }];
try {
  console.log(students[1].name);
} catch (error) {
  console.log("Tidak ada nama siswa terdaftar");
}
