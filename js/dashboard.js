const SUPABASE_URL = "https://abinzygydijygzgqzhgk.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiaW56eWd5ZGlqeWd6Z3F6aGdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQwMDA4NTAsImV4cCI6MjA5OTU3Njg1MH0.ZwgT3_uGc-XFG6GQlZmGQeLzUKBcFsZ0G7S4Wpn7Sto"

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);


async function tampilkanMahasiswa(){

    const nimLogin = sessionStorage.getItem("nim");

    if(!nimLogin){
        window.location.href = "login.html";
        return;
    }


    const { data, error } = await supabaseClient
        .from("mahasiswa")
        .select("nama, nim")
        .eq("nim", nimLogin)
        .single();


    if(error){
        console.log(error);
        document.getElementById("namaMahasiswa").innerHTML =
        "Data mahasiswa tidak ditemukan";
        return;
    }


    document.getElementById("namaMahasiswa").innerHTML =
        `${data.nama} — ${data.nim}`;

}


tampilkanMahasiswa();