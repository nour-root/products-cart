const addCart = () => {
  return `<button
                  type="button"
                  id="add-to-cart"
                  class="absolute -bottom-4 right-1/2 translate-x-1/2 flex justify-between items-center w-[150px] px-3 py-1 border border-solid border-rose-400 rounded-r-2xl rounded-l-2xl bg-rose-50"
                >
                  <img src="/assets/images/icon-add-to-cart.svg" alt="" />
                  <span class="font-medium">Add to Cart</span>
                </button>`;
};
export default addCart;
