const order_confime_mobile = (order, num) => {
  return ` <div
                class="flex items-center justify-start space-x-3 border-b-[1.5px] p-1 border-gray-200"
              >
               <img src="/${order.image.thumbnail}" width="80" alt="">         
                <div class="details flex-1 flex justify-between">
                  <div>
                    <p class="font-semibold mb-2 max-md:font-normal max-md:text-sm">
                      ${order.name}
                    </p>
                    <div class="numbers flex space-x-3 font-medium">
                      <span class="text-custom-red"
                        ><span id="item-${
                          order.id
                        }" class="quantity">${num}</span>x</span
                      >
                      <span class="text-gray-400"
                        >@<span id="price-${order.id}" class="pl-1">$${
    order.price
  }</span></span
                      >
                      
                    </div>
                  </div>
                  <span id="total-item-mobile-${
                    order.id
                  }" class="text-black text-lg font-semibold mr-2">$${
    order.price * num
  }
                      </span>
                </div>
              </div>`;
};
export default order_confime_mobile;
