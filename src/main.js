import "./style.css";
import ShowProducts from "./components/showProduct";
import loader from "./Helper/loader";
import fetchData from "./service/fetchData.service";
import order_cart from "./components/order_cart";
import quantity_html from "./components/quantity";
import order_cart_mobile from "./components/order_cart_mobile";
import order_confime_mobile from "./components/order_confime_mobile";
//
const container_products = document.getElementById("products");
const numOrders = document.querySelector(".num-orders span");
const numOrders_mobile = document.querySelector(".num-orders_mobile span");
const Orders_UL = document.querySelector("#itemsCart");
const Orders_UL_mobile = document.querySelector("#itemsCart_mobile");
let total_price = document.getElementById("order-Total");
let total_price_mobile = document.getElementById("order-Total-mobile");
let total_price_confime_mobile = document.getElementById(
  "order-Total-confime-mobile"
);
let total_price_confime_desktop = document.getElementById(
  "order-Total-confime"
);
let orders_confimed_mobile = document.getElementById("orders_mobile");
let orders_confimed_desktop = document.getElementById("orders_desktop");
//
let arrItems = [];
let arrlistProducts = [];
let OrdersCart = JSON.parse(localStorage.getItem("data")) || [];
const cart = document.querySelector(".cart");
const cart_mobile = document.querySelector(".cart_mobile");
const empty_cart = document.querySelector(".empty-cart");
const empty_cart_mobile = document.querySelector(".empty-cart_mobile");
const btn_new_order = document.querySelector("#btn-new-order");
const orders_mobile = document.querySelector("#orders_mobile");
//
container_products.innerHTML = loader();
//
let increment = (id) => {
  let selectItem = id;
  let item = OrdersCart.find((x) => x.id === selectItem);
  if (item) {
    item.quantity += 1;
  }
  update(selectItem);
  localStorage.setItem("data", JSON.stringify(OrdersCart));
};
let decrement = (id) => {
  let selectItem = id;
  let item = OrdersCart.find((x) => x.id === selectItem);
  let product_img = document.getElementById(`img-${id}`);
  if (item) {
    if (item.quantity > 1) {
      item.quantity -= 1;
    } else if (item.quantity <= 1) {
      product_img.classList.remove(
        "border-[3px]",
        "border-custom-red",
        "rounded-2xl"
      );
      document.getElementById(`${id}`).innerHTML = `<button
      type="button"
      class="absolute add-to-cart hover:text-custom-red -bottom-[17px] right-1/2 translate-x-1/2 flex space-x-1 justify-center items-center  max-md:w-[125px] max-md:py-2 md:w-[130px] max-lg:w-[150px] py-[10px] border border-solid border-rose-400 rounded-full bg-rose-50 hover:border hover:border-custom-red duration-150"
      >
      <img src="/assets/images/icon-add-to-cart.svg" class="max-md:w-4" alt="" />
      <span class="font-medium text-sm  duration-150 max-md:text-[10px]">Add to Cart</span>
      </button>`;
      OrdersCart = OrdersCart.filter((x) => x.id !== selectItem);
      generateCartItems();
    }
    if (OrdersCart.length === 0) {
      cart.classList.add("hidden");
      empty_cart.classList.remove("hidden");
    }
  }
  calculater();
  update(selectItem);
  localStorage.setItem("data", JSON.stringify(OrdersCart));
};
let update = (id) => {
  let item = OrdersCart.find((x) => x.id === id);
  let search = arrItems.find((x) => x.id === id);
  document.getElementById(`order-${id}`).innerHTML = item.quantity;
  document.getElementById(`item-${id}`).innerHTML = item.quantity;
  document.getElementById(`price-${id}`).innerHTML = `$${search.price}`;
  document.getElementById(`total-item-${id}`).innerHTML = `$${
    item.quantity * search.price
  }`;
  document.getElementById(`total-item-mobile-${id}`).innerHTML = `$${
    item.quantity * search.price
  }`;
  generateCartItems();
  calculater();
  Total_Price();
};
let Total_Price = () => {
  if (OrdersCart.length !== 0) {
    let amount = OrdersCart.map((x) => {
      let { id, quantity } = x;
      let search = arrItems.find((order) => order.id === id) || [];
      return quantity * search.price;
    }).reduce((y, z) => y + z, 0);
    total_price.innerHTML = `$${amount}`;
    total_price_mobile.innerHTML = `$${amount}`;
  }
};
let remove_Item = (id) => {
  let selectItem = id.slice(7);
  OrdersCart = OrdersCart.filter((x) => x.id !== selectItem);
  localStorage.setItem("data", JSON.stringify(OrdersCart));
  let item = OrdersCart.find((x) => x.id === selectItem);
  let product_img = document.getElementById(`img-${selectItem}`);
  if (!item) {
    product_img.classList.remove(
      "border-[3px]",
      "border-custom-red",
      "rounded-2xl"
    );
    document.getElementById(`${selectItem}`).innerHTML = `<button
    type="button"
    class="absolute add-to-cart hover:text-custom-red -bottom-[17px] right-1/2 translate-x-1/2 flex space-x-1 justify-center items-center  max-md:w-[125px] max-md:py-2 md:w-[130px] max-lg:w-[150px] py-[10px] border border-solid border-rose-400 rounded-full bg-rose-50 hover:border hover:border-custom-red duration-150"
    >
    <img src="/assets/images/icon-add-to-cart.svg" class="max-md:w-4" alt="" />
    <span class="font-medium text-sm  duration-150 max-md:text-[10px]">Add to Cart</span>
    </button>`;
  }
  if (OrdersCart.length === 0) {
    cart.classList.add("hidden");
    cart_mobile.classList.add("hidden");
    empty_cart.classList.remove("hidden");
    empty_cart_mobile.classList.remove("hidden");
  }
  if (OrdersCart.length <= 4) {
    Orders_UL_mobile.classList.remove("overflow-y-scroll");
    generateCartItems();
  } else {
    Orders_UL_mobile.classList.add("overflow-y-scroll");
    generateCartItems();
  }
  calculater();
  Total_Price();
};
const add_to_cart = (product_id) => {
  const selectItem = product_id;
  const item = OrdersCart.find((x) => x.id === selectItem.id);
  if (!item) {
    OrdersCart.push({
      id: selectItem.id,
      quantity: 1,
    });
  }
  localStorage.setItem("data", JSON.stringify(OrdersCart));
  add_to_cart_html(selectItem);
};
let generateCartItems = () => {
  Orders_UL.innerHTML = OrdersCart.map((x) => {
    let { id, quantity } = x;
    let search = arrItems.find((y) => y.id === id);
    return order_cart(search, `${quantity}`);
  }).join("");
  Orders_UL_mobile.innerHTML = OrdersCart.map((x) => {
    let { id, quantity } = x;
    let search = arrItems.find((y) => y.id === id);
    return order_cart_mobile(search, `${quantity}`);
  }).join("");
  if (OrdersCart.length === 0) {
    cart.classList.add("hidden");
    cart_mobile.classList.add("hidden");
    empty_cart.classList.remove("hidden");
    empty_cart_mobile.classList.remove("hidden");
  }
  if (OrdersCart.length <= 3) {
    Orders_UL_mobile.classList.remove("overflow-y-scroll");
  } else {
    Orders_UL_mobile.classList.add("overflow-y-scroll");
  }
};
let calculater = () => {
  numOrders.innerHTML = OrdersCart.map((x) => x.quantity).reduce(
    (y, z) => y + z,
    0
  );
  numOrders_mobile.innerHTML = OrdersCart.map((x) => x.quantity).reduce(
    (y, z) => y + z,
    0
  );
};
let add_to_cart_html = (selectItem) => {
  let item = OrdersCart.find((x) => x.id === selectItem.id);
  if (OrdersCart.length > 0) {
    selectItem.innerHTML = quantity_html(item);
    empty_cart.classList.add("hidden");
    empty_cart_mobile.classList.add("hidden");
    cart.classList.remove("hidden");
    cart_mobile.classList.remove("hidden");
    calculater();
    Total_Price();
    generateCartItems();
    if (OrdersCart.length <= 3) {
      Orders_UL_mobile.classList.remove("overflow-y-scroll");
    } else {
      Orders_UL_mobile.classList.add("overflow-y-scroll");
    }
  } else if (OrdersCart.length === 0) {
    cart.classList.add("hidden");
    cart_mobile.classList.add("hidden");
    empty_cart.classList.remove("hidden");
    empty_cart_mobile.classList.remove("hidden");
  }
};
const hidModal = (id) => {
  document.body.style.position = "relative";
  document.getElementById("overlay").style.display = "none";
  document.getElementById(id).style.transition = " .4s";
  document.getElementById(id).style.transform = "translateY(100%)";
};
const showModal = (id) => {
  document.body.style.position = "fixed";
  document.getElementById("overlay").style.display = "block";
  document.getElementById(id).style.transition = " .4s";
  document.getElementById(id).style.transform = "translateY(0)";
};
container_products.addEventListener("click", (e) => {
  let posiationClick = e.target.parentElement.parentElement;
  let product_image = posiationClick.parentElement;
  let btn = e.target.parentElement;
  if (btn.classList.contains("add-to-cart")) {
    add_to_cart(posiationClick);
    product_image.classList.add(
      "border-[3px]",
      "border-custom-red",
      "rounded-2xl"
    );
  }
});
const confirme_order_desktop = (id) => {
  document.body.style.position = "fixed";
  document.getElementById("overlay").style.display = "block";
  document.getElementById(id).style.transition = " .4s";
  document.getElementById(id).style.transform = "scale(.8)";
  if (OrdersCart.length !== 0) {
    let amount = OrdersCart.map((x) => {
      let { id, quantity } = x;
      let search = arrItems.find((order) => order.id === id) || [];
      return quantity * search.price;
    }).reduce((y, z) => y + z, 0);
    orders_confimed_desktop.innerHTML = OrdersCart.map((x) => {
      let { id, quantity } = x;
      let search = arrItems.find((y) => y.id === id);
      return order_confime_mobile(search, `${quantity}`);
    }).join("");
    total_price_confime_desktop.innerHTML = `$${amount}`;
    if (OrdersCart.length <= 3) {
      orders_confimed_desktop.classList.remove("overflow-y-scroll");
    } else {
      orders_confimed_desktop.classList.add("overflow-y-scroll");
    }
  }
};
const confirme_order = (id) => {
  document.getElementById(id).style.transition = " .4s";
  document.getElementById(id).style.transform = "translateY(0)";
  if (OrdersCart.length !== 0) {
    let amount = OrdersCart.map((x) => {
      let { id, quantity } = x;
      let search = arrItems.find((order) => order.id === id) || [];
      return quantity * search.price;
    }).reduce((y, z) => y + z, 0);
    orders_confimed_mobile.innerHTML = OrdersCart.map((x) => {
      let { id, quantity } = x;
      let search = arrItems.find((y) => y.id === id);
      return order_confime_mobile(search, `${quantity}`);
    }).join("");
    total_price_confime_mobile.innerHTML = `$${amount}`;
    if (OrdersCart.length <= 2) {
      orders_mobile.classList.remove("overflow-y-scroll");
    } else {
      orders_mobile.classList.add("overflow-y-scroll");
    }
  }
};
let new_order = () => {
  btn_new_order.addEventListener("click", () => {
    document.body.style.position = "relative";
    document.getElementById("overlay").style.display = "none";
    document.getElementById("Modal-confirme-order-mobile").style.transition =
      " .4s";
    document.getElementById("Modal-confirme-order-mobile").style.transform =
      "translateY(100%)";
    document.getElementById("Modal").style.transition = " .4s";
    document.getElementById("Modal").style.transform = "translateY(100%)";
    OrdersCart = [];
    localStorage.setItem("data", JSON.stringify(OrdersCart));
    main();
    calculater();
  });
};
let new_order_desktop = () => {
  document
    .getElementById("btn-new-order-desktop")
    .addEventListener("click", () => {
      document.body.style.position = "relative";
      document.getElementById("overlay").style.display = "none";
      document.getElementById("Modal-confirme-order").style.transition = " .4s";
      document.getElementById("Modal-confirme-order").style.transform =
        "scale(0)";
      OrdersCart = [];
      localStorage.setItem("data", JSON.stringify(OrdersCart));
      main();
      calculater();
    });
};
const main = () => {
  fetchData().then(async (response) => {
    const data = await response.json();
    data.map((item) => {
      arrItems.push(item);
    });
    if (data.length > 0) {
      data.forEach((product, i) => {
        product.id = `${i + 1}`;
        const itemComponent = ShowProducts(product);
        arrlistProducts.push(itemComponent);
      });
      container_products.innerHTML = arrlistProducts.join("");
    }
    if (OrdersCart.length > 0 && data.length > 0) {
      Total_Price();
      calculater();
      generateCartItems();
      empty_cart.classList.add("hidden");
      empty_cart_mobile.classList.add("hidden");
      cart.classList.remove("hidden");
      cart_mobile.classList.remove("hidden");
      if (OrdersCart.length > 4) {
        Orders_UL_mobile.classList.add("overflow-y-scroll");
      } else {
        Orders_UL_mobile.classList.remove("overflow-y-scroll");
      }
      container_products.innerHTML = arrlistProducts.join("");
    }
    if (OrdersCart.length === 0) {
      cart.classList.add("hidden");
      cart_mobile.classList.add("hidden");
      empty_cart.classList.remove("hidden");
      empty_cart_mobile.classList.remove("hidden");
    }
  });
};
new_order();
new_order_desktop();
main();
window.increment = increment;
window.decrement = decrement;
window.remove_Item = remove_Item;
window.hidModal = hidModal;
window.showModal = showModal;
window.confirme_order = confirme_order;
window.confirme_order_desktop = confirme_order_desktop;
