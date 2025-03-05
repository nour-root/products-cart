const order_cart_mobile = (order, num) => {
  return ` <div
              class="flex items-center justify-between border-b-[1.5px] p-3 border-gray-200"
            >
              <div class="details">
                <p class="font-semibold mb-2 max-md:font-normal max-md:text-sm">
                  ${order.name}
                </p>
                <div class="numbers flex space-x-3 font-medium">
                  <span class="text-custom-red"
                    ><span id="item-${
                      order.id
                    }" class="quantity">${num}</span>x</span>
                  <span class="text-gray-400"
                    >@<span id="price-${order.id}" class="pl-1">$${
    order.price
  }</span></span
                  >
                  <span id="total-item-mobile-${
                    order.id
                  }" class="text-gray-500">$${order.price * num}</span>
                </div>
              </div>
              <button type="button" id="remove-${
                order.id
              }" onclick="remove_Item('remove-${order.id}')" class="mr-4">
                <svg
                  class="fill-[#CAAFA7] hover:fill-black duration-150 p-[2px] border-[2px] border-[#caafa7] hover:border-black rounded-full"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 10 10"
                >
                  <path
                    d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
                  />
                </svg>
              </button>
            </div>`;
};
export default order_cart_mobile;
