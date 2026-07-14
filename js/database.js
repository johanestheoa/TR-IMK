const SUPABASE_URL = "https://abinzygydijygzgqzhgk.supabase.co"
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiaW56eWd5ZGlqeWd6Z3F6aGdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQwMDA4NTAsImV4cCI6MjA5OTU3Njg1MH0.ZwgT3_uGc-XFG6GQlZmGQeLzUKBcFsZ0G7S4Wpn7Sto"

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

const form = document.getElementById("registerForm");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const nim = document.getElementById("nim").value;
    const nama = document.getElementById("nama").value;
    const tempat_lahir = document.getElementById("tempat_lahir").value;
    const tanggal_lahir = document.getElementById("tanggal_lahir").value;
    const jenis_kelamin = document.getElementById("jenis_kelamin").value;
    const agama = document.getElementById("agama").value;
    const domisili = document.getElementById("domisili").value;
    const no_hp = document.getElementById("no_hp").value;
    const jenjang = document.getElementById("jenjang").value;
    const fakultas = document.getElementById("fakultas").value;
    const prodi = document.getElementById("prodi").value;
    const angkatan = document.getElementById("angkatan").value;
    const wali_studi = document.getElementById("wali_studi").value;

    const password = 
    tanggal_lahir.split("-").reverse().join("");

    const data = {
        nim : nim,
        nama : nama,
        tempat_lahir : tempat_lahir,
        tanggal_lahir : tanggal_lahir,
        jenis_kelamin : jenis_kelamin,
        agama : agama,
        domisili : domisili,
        no_hp : no_hp,
        jenjang : jenjang,
        fakultas : fakultas,
        prodi : prodi,
        angkatan : angkatan,
        wali_studi : wali_studi,
        password : password
    };

    const { error } = await supabaseClient 
    .from("mahasiswa")
    .insert([data]);

    
    if(error){
        alert("Gagal Membuat Akun!");

        console.log(error);
    }else{
        alert(
            "Akun berhasil dibuat!\n\n" + 
            "Password awal Anda adalah tanggal lahir (DDMMYYYY)."
        );

        form.reset();
    }

});
