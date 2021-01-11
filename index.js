// Git add TENFILEMUONCHUYENTUVUNGNHO1SANGVUNGNHO2 rồi Enter
// Git commit -m "TenFileVuaChuyen" Enter nó sẽ chuyển File đó sang vùng nhớ 3
// Khi File đang ở vùng nhớ 3, mà thao tác thêm, sửa, xóa ở File thì File bản sao sẽ được tạo ra, và nhảy về vùng nhớ 1, File cũ khi chưa sửa vẫn nằm ở vùng nhớ 3
let sanpham = prompt("Nhập vào Tên sản phẩm");
if(sanpham == "Gà") {console.log("Gia 10$");
} else if(sanpham == "Bò") {
    console.log("Gia 50$");
} else if(sanpham == "Vịt") {console.log("Gia 15$");}
