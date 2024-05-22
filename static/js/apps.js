function hitungTotal(){
    harga = document.getElementById("txtHarga").value;
    luas = document.getElementById("txtLuas").value;
    Total = harga * luas;
    document.getElementById("txtTotal").value =  Total;

}
function fplanT(){
    harga = document.getElementById("txtHarga").value;
    tahun = document.getElementById("txtTahun").value;
    Tabung = harga / tahun;
    document.getElementById("txtTabung").value =  Tabung;

}
function fplanB(){
    harga = document.getElementById("txtHarga").value;
    bulan = document.getElementById("txtBulan").value;
    Tabung = harga / bulan;
    document.getElementById("txtTabungB").value =  Tabung;

}
function fplanH(){
    harga = document.getElementById("txtHarga").value;
    hari = document.getElementById("txtHari").value;
    Tabung = harga / hari;
    document.getElementById("txtTabungH").value =  Tabung;

}
function LengthConverter(valNum) {
    document.getElementById("output").innerHTML=valNum*10000;
}