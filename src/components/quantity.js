const quantity = () => {
  return ` <div
                id="quantity"
                class="absolute bg-custom-red -bottom-4 right-1/2 translate-x-1/2 flex justify-center items-center w-[145px] px-2 h-[35px] border border-solid border-rose-400 rounded-r-2xl rounded-l-2xl"
              >
                <button
                  type="button"
                  id="decrement"
                  class="flex px-[2.5px] items-center justify-center w-[18px] h-[18px] border border-white rounded-lg"
                >
                  <img
                    src="/assets/images/icon-decrement-quantity.svg"
                    alt=""
                  />
                </button>
                <span class="number font-medium text-rose-50 mx-auto">1</span>
                <button
                  type="button"
                  id="increment"
                  class="flex p-[2.5px] items-center justify-center w-[18px] h-[18px] border border-white rounded-lg"
                >
                  <img
                    src="/assets/images/icon-increment-quantity.svg"
                    alt=""
                  />
                </button>
              </div>`;
};
export default quantity;
