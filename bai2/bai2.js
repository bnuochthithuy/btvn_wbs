var id = 0; // Biến đếm số lượng sản phẩm
var total = 0; // Biến lưu tổng số tiền

function addProduct() {
    id++;
    var pname = document.getElementById("product_name").value;
    var qt = document.getElementById("product_qty").value;
    var pr = document.getElementById("product_price").value;
    var sub_total = qt * pr;

    if (pname && qt && pr) {
        // Tạo một hàng mới và thêm vào bảng
        var row = "<tr>";
        row += "<td>" + id + "</td>";
        row += "<td>" + pname + "</td>";
        row += "<td>" + qt + "</td>";
        row += "<td>" + pr + "</td>";
        row += "<td>" + sub_total + "</td>";
        row += "</tr>";
        document.getElementById("tb").innerHTML += row;

        // Cộng giá trị sub_total vào tổng số tiền nhưng chưa hiển thị ngay
        total += sub_total;

        // Xóa giá trị nhập sau khi thêm sản phẩm
        document.getElementById("frm").reset();
    } else {
        alert("Please enter all product details.");
    }
}

function calculateTotal() {
    // Cập nhật tổng số tiền hiển thị
    document.getElementById("total_amount").innerText = total;
}