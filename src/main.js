import "./style.css";
import ShowProducts from "./components/showProduct";
import quantity from "./components/quantity";
import loader from "./Helper/loader";
import fetchData from "./service/fetchData.service";
import addCart from "./components/add-to-cart";
//

const logic = () => {
  const add_to_cart = document.querySelectorAll("#add-to-cart");
  add_to_cart.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const product_image = e.currentTarget.parentElement.parentElement;
      const qbtn = e.target.parentElement.parentElement;
      qbtn.innerHTML = quantity();
      product_image.classList.add(
        "border-[3px]",
        "border-custom-red",
        "rounded-xl"
      );
      qbtn.children[0].addEventListener("click", (e) => {
        let num = qbtn.children[0].children[1];
        const b = e.target.parentElement;
        const img =
          e.target.parentElement.parentElement.parentElement.parentElement;
        if (b.getAttribute("id") === "increment") {
          num.innerHTML = `${increment(num.textContent)}`;
        } else if (b.getAttribute("id") === "decrement") {
          if (num.textContent > 1) {
            num.innerHTML = `${decrement(num.textContent)}`;
          } else {
            const parentBtn =
              e.target.parentElement.parentElement.parentElement;
            parentBtn.innerHTML = addCart();
            img.classList.remove(
              "border-[3px]",
              "border-custom-red",
              "rounded-xl"
            );
          }
        }
      });
    });
  });
};

const container_products = document.getElementById("products");
//
const arrItems = [];
//
container_products.innerHTML = loader();
const main = () => {
  fetchData()
    .then(async (data) => {
      const products = await data.json();
      container_products.innerHTML = "";
      products.forEach((product) => {
        const itemComponent = ShowProducts(product);
        arrItems.push(itemComponent);
      });
      container_products.innerHTML = arrItems;
    })
    .finally(() => {
      logic();
    });
};
const increment = (num) => {
  num++;
  return num;
};
const decrement = (num) => {
  num--;
  return num;
};
main();
