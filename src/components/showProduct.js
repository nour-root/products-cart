const ShowProducts = (product) => {
  return `<div class="w-fit flex-col space-y-10">
            <div id="img-${product.id}" class="relative">
              <img
                src="${product.image.mobile}"
                class="rounded-xl sm:hidden"
                alt=""
              />
              <img
                src="${product.image.desktop}"
                class="rounded-xl hidden sm:block"
                alt=""
              />
              <div id="${product.id}">
                <button
                  type="button"
                  class="absolute add-to-cart hover:text-custom-red -bottom-[17px] right-1/2 translate-x-1/2 flex space-x-1 justify-center items-center  max-md:w-[125px] max-md:py-2 md:w-[130px] max-lg:w-[150px] py-[10px] border border-solid border-rose-400 rounded-full bg-rose-50 hover:border hover:border-custom-red duration-150"
                >
                  <img src="/assets/images/icon-add-to-cart.svg" class="max-md:w-4" alt="" />
                  <span class="font-medium text-sm  duration-150 max-md:text-[10px]">Add to Cart</span>
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
