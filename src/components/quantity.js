const quantity_html = (item) => {
  return ` <div
                id="quantity"
                class="absolute bg-custom-red -bottom-[22px] right-1/2 translate-x-1/2 flex justify-center items-center max-md:w-[125px] max-md:py-2 md:w-[130px] max-lg:w-[150px] py-[8px] border border-solid border-rose-400 rounded-full"
              >
                <button
                  type="button"
                  id="decrement"
                  onclick="decrement('${item.id}')"
                  class="p-[2.9px] ml-3 items-center justify-center border border-white rounded-full hover:bg-rose-50 duration-300"
                >
                 <svg class="fill-white " xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 2">
                 <path  d="M0 .375h10v1.25H0V.375Z"/></svg>
                </button>
                <span id="order-${item.id}" class="number font-medium text-rose-50 mx-auto">${item.quantity}</span>
                <button
                  type="button"
                  id="increment"
                  onclick="increment('${item.id}')"
                  class="flex p-[3px] mr-3 items-center justify-center border border-white rounded-full hover:bg-rose-50 duration-300"
                >
                  <svg class="fill-white" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
                  <path  d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
                </button>
              </div>`;
};
export default quantity_html;
