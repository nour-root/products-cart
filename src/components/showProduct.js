const ShowProducts = (product) => {
  return `<div id="order" class="w-fit flex-col space-y-10">
            <div id="image" class="relative">
              <img
                src="${product.image.mobile}"
                class="rounded-xl"
                alt=""
              />
              <div>
                <button
                  type="button"
                  id="add-to-cart"
                  class="absolute -bottom-4 right-1/2 translate-x-1/2 flex justify-between items-center w-[150px] px-3 py-1 border border-solid border-rose-400 rounded-r-2xl rounded-l-2xl bg-rose-50"
                >
                  <img src="/assets/images/icon-add-to-cart.svg" alt="" />
                  <span class="font-medium">Add to Cart</span>
                </button>
              </div>
            </div>
            <div id="info">
              <p class="text-rose-500">${product.category}</p>
              <p class="font-semibold text-rose-900">${product.name}</p>
              <span class="block text-custom-red font-semibold">$${parseFloat(
                product.price
              ).toFixed(2)}</span>
            </div>
          </div>`;
};
export default ShowProducts;
