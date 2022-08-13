function addtocart() {
  var arr = localStorage.getItem("key2");
  var carts = JSON.parse(arr);
  // var carts = [];
  let data = {
    id: $("#idproduct").text(),
    name: $("#name").text(),
    img: $("#img").attr("src"),
    price: $("#price").text(),
    quantity: $("#soluong").val(),
  };

  if (carts && carts.length > 0) {
    //tìm kiếm xem id spham mới có trrong cart chưa
    // nếu có tăng số lượng sp trong cart lên theo sl được thêm
    // nếu chưa có trong carts thì thêm sp đó vào
    let index = carts.findIndex((element) => {
      return element.id == data.id;
    });
    if (index == -1) {
      carts.push(data);
    } else if (index != -1) {
      carts[index].quantity =
        Number(carts[index].quantity) + Number(data.quantity);
    }
  } else {
    carts.push(data);
  }
  if (data.quantity == "") {
    toastr.error("Bạn chưa nhập số lượng!", "Vui lòng nhập số lượng!");
    return;
  }
  toastr.success("Done", "Thành Công");
  // carts.push(data);
  let setJson = JSON.stringify(carts);
  localStorage.setItem("key2", setJson);
}
