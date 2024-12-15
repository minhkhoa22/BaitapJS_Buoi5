//Bài 1
document.getElementById("btnKetQua").onclick = function () {
  let tongdiem = 0;
  let diemkhuvuc;
  let diemdoituong;
  let diemchuan = document.getElementById("diemchuan").value * 1;
  let khuvuc = document.getElementById("khuvuc").value;
  let doituong = document.getElementById("doituong").value;
  let diem1 = document.getElementById("diem1").value * 1;
  let diem2 = document.getElementById("diem2").value * 1;
  let diem3 = document.getElementById("diem3").value * 1;
  switch (khuvuc) {
    case "A":
      diemkhuvuc = 2;
      break;
    case "B":
      diemkhuvuc = 1;
      break;
    case "C":
      diemkhuvuc = 0.5;
      break;
    default:
      diemkhuvuc = 0;
      break;
  }

  switch (doituong) {
    case "1":
      diemdoituong = 2.5;
      break;
    case "2":
      diemdoituong = 1.5;
      break;
    case "3":
      diemdoituong = 1;
      break;
    default:
      diemdoituong = 0;
      break;
  }
  if (diemchuan > 30 || diemchuan <= 0) {
    document.getElementById("result").innerHTML =
      "Điểm chuẩn phải lớn hơn 0 và bé hơn hoặc bằng 30";
  }
  if (
    diem1 < 0 ||
    diem2 < 0 ||
    diem3 < 0 ||
    diem1 > 10 ||
    diem2 > 10 ||
    diem3 > 10
  ) {
    document.getElementById("result").innerHTML =
      "Điểm mỗi môn phải từ 0 đến 10.";
    return;
  }
  if (diem1 <= 0 || diem2 <= 0 || diem3 <= 0) {
    document.getElementById("result").innerHTML =
      "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
    return;
  }
  tongdiem = diem1 + diem2 + diem3 + diemkhuvuc + diemdoituong;
  if (tongdiem >= diemchuan) {
    document.getElementById(
      "result"
    ).innerHTML = `Chúc mừng! Bạn đã đậu. Tổng điểm: ${tongdiem}`;
  } else {
    document.getElementById(
      "result"
    ).innerHTML = `Rất tiếc! Bạn đã trượt. Tổng điểm: ${tongdiem}`;
  }
};

//Bài 2
document.getElementById("btnTienDien").onclick = function () {
  let soKwh = document.getElementById("soKwh").value * 1;
  let name = document.getElementById("name").value;
  let tiendien;
  if (soKwh <= 50) {
    tiendien = soKwh * 500;
  } else if (soKwh <= 100) {
    tiendien = soKwh * 650;
  } else if (soKwh <= 200) {
    tiendien = soKwh * 850;
  } else if (soKwh <= 350) {
    tiendien = soKwh * 1100;
  } else {
    tiendien = soKwh * 1300;
  }
  document.getElementById(
    "result2"
  ).innerHTML = `Họ tên: ${name}; Tiền điện: ${tiendien} VND`;
};

//Bài 3
document.getElementById("btnTienThue").onclick = function () {
  let hoTen = document.getElementById("hoTen").value;
  let thuNhap = document.getElementById("thuNhap").value * 1;
  let nguoiPhuThuoc = document.getElementById("nguoiPhuThuoc").value * 1;
  if (!hoTen || thuNhap <= 0 || nguoiPhuThuoc < 0) {
    document.getElementById("result3").innerHTML =
      "Vui lòng nhập đầy đủ thông tin hợp lệ!";
    return;
  }
  let thuNhapChiuThue = thuNhap - 4000000 - nguoiPhuThuoc * 1600000;
  let thueThuNhap = 0;

  if (thuNhapChiuThue <= 60000000) {
    thueThuNhap = thuNhapChiuThue * 0.05;
  } else if (thuNhapChiuThue <= 120000000) {
    thueThuNhap = thuNhapChiuThue * 0.1;
  } else if (thuNhapChiuThue <= 210000000) {
    thueThuNhap = thuNhapChiuThue * 0.15;
  } else if (thuNhapChiuThue <= 384000000) {
    thueThuNhap = thuNhapChiuThue * 0.2;
  } else if (thuNhapChiuThue <= 624000000) {
    thueThuNhap = thuNhapChiuThue * 0.25;
  } else if (thuNhapChiuThue <= 960000000) {
    thueThuNhap = thuNhapChiuThue * 0.3;
  } else {
    thueThuNhap = thuNhapChiuThue * 0.35;
  }
  document.getElementById(
    "result3"
  ).innerHTML = `Họ tên: ${hoTen}; Thuế thu nhập cá nhân bạn phải đóng là: ${thueThuNhap} VND.`;
};

//Bài 4