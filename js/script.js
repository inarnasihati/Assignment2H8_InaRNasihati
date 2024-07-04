
function show_form() {
    let form_isiprofile = document.querySelector("#form_profile");
    form_isiprofile.style.display = "block";
}

function submit_data() {
    //definisi data form
    let isi_nama = document.querySelector("#isi_nama");
    let isi_availability = document.querySelector("#isi_availability");
    let isi_role = document.querySelector("#isi_role");
    let isi_usia = document.querySelector("#isi_usia");
    let isi_lokasi = document.querySelector("#isi_lokasi");
    let isi_experience = document.querySelector("#isi_experience");
    let isi_email = document.querySelector("#isi_email");

    //definisi display profile
    let nama = document.querySelector("#nama");
    let availability = document.querySelector("#availability");
    let role = document.querySelector("#role");
    let usia = document.querySelector("#usia");
    let lokasi = document.querySelector("#lokasi");
    let experience = document.querySelector("#experience");
    let email = document.querySelector("#email");
    
    //def form nya
    let form_isiprofile = document.querySelector("#form_profile");

    nama.innerText = isi_nama.value;
    role.innerText = isi_role.value;
    availability.innerText = isi_availability.value;
    usia.innerText = isi_usia.value;
    lokasi.innerText = isi_lokasi.value;
    exp.innerText = isi_experience.value;
    email.innerText = isi_email.value;

    form_isiprofile.style.display = "none";
}