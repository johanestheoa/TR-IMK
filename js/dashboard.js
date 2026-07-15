const SUPABASE_URL = "URL_SUPABASE_KAMU";
const SUPABASE_KEY = "KEY_SUPABASE_KAMU";

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