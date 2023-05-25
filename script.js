
//Proses hitung luas persegi
function hitungLuas(){
    //Nilai input user
    var sisiLuas = document.getElementById("sisi-luas").value;

    if(parseInt(sisiLuas)){
        //rumus luas pesegi
        var luas = sisiLuas * sisiLuas;
        //menampilkan hasil
        document.getElementById("rumus_luas").innerHTML = "L = S ✕ S"
        document.getElementById("prosesHitung_luas").innerHTML = "L = " +sisiLuas+" ✕ "+sisiLuas ;
        document.getElementById("output_luas").innerHTML = "L = " +luas;
    } else {
        alert("Masukkan input berupa angka!")
    }
}

// Menghapus log sebelumya
function resetLuas(){
    document.getElementById("sisi-luas").value = "";
    document.getElementById("output_luas").innerHTML = "";
    document.getElementById("prosesHitung_luas").innerHTML = "";
    document.getElementById("rumus_luas").innerHTML = "";
}





//Proses hitung keliling persegi
function hitungKeliling(){
     //Nilai input user
    var sisiKeliling = document.getElementById("sisi-keliling").value;

    if(parseInt(sisiKeliling)){
        //rumus keliling persegi
        var keliling = sisiKeliling * 4;
        //menampilkan hasil
        document.getElementById("rumus_keliling").innerHTML = "L = S ✕ 4"
        document.getElementById("prosesHitung_keliling").innerHTML = "L = " +sisiKeliling+" ✕ 4" ;
        document.getElementById("output_keliling").innerHTML = "L = " +keliling;

    } else {
        alert("Masukkan input berupa angka!")
    }
}

// Menghapus log sebelumya
function resetKeliling(){
    document.getElementById("sisi-keliling").value = "";
    document.getElementById("output_keliling").innerHTML = "";
    document.getElementById("prosesHitung_keliling").innerHTML = "";
    document.getElementById("rumus_keliling").innerHTML = "";
}