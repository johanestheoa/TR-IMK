const SUPABASE_URL = "https://abinzygydijygzgqzhgk.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiaW56eWd5ZGlqeWd6Z3F6aGdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQwMDA4NTAsImV4cCI6MjA5OTU3Njg1MH0.ZwgT3_uGc-XFG6GQlZmGQeLzUKBcFsZ0G7S4Wpn7Sto"

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

const form = document.getElementById("loginForm");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const nim = document.getElementById("nim").value;
    const password = document.getElementById("password").value;
    
    const { data, error } = await supabaseClient
    .from("mahasiswa")
    .select("*")
    .eq("nim", nim)
    .eq("password", password)
    .single();

    if(error){
        alert("NIM atau Password salah!.");
        return;
    }

    alert("Login berhasil!");

    sessionStorage.setItem("nim", data.nim);
    window.location.href = "dashboard.html";
});