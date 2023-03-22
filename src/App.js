import "./App.css";

function App() {
  return (
    <>
      <div class="sidebar">
        <div class="sidebar_logo">
          <img src="/img/img-avatar.png" alt="Conapny logo" />
          <div class="sidebar_close" id="sidebar_close">
            <i class="bx bx-x sidebar_right"></i>
          </div>
        </div>
        <div class="sidebar_user">
          <div class="sidebar_user_info">
            <img
              src="/img/img_avatar-png-2.png"
              alt="User picture"
              class="profile_image"
            />
            <div class="sidebar_user_name">The Duong</div>
            <button class="btn btn_outline">
              <i class="bx bx-log-out bx-flip-horizontal"></i>
            </button>
          </div>
        </div>
        <ul class="sidebar_menu">
          <li>
            <a href="#" class="action">
              <i class="bx bx-home-alt"></i>
              <span>dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="bx bx-shopping-bag"></i>
              <span>sales</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="bx bx-chart"></i>
              <span>analytic</span>
            </a>
          </li>
          <li class="sidebar_submenu">
            <a href="#" class="sidebar_menu_dropdown">
              <i class="bx bx-user-circle"></i>
              <span>acount</span>
              <div class="dropdown_icon"></div>
            </a>
            <ul class="sidebar_menu sidebar_menu_dropdown_content">
              <li>
                <a href="#">edit prolife</a>
              </li>
              <li>
                <a href="#">Account Settings</a>
              </li>
              <li>
                <a href="#">Billing</a>
              </li>
            </ul>
          </li>
          <li class="sidebar_submenu">
            <a href="#" class="sidebar_menu_dropdown">
              <i class="bx bx-category"></i>
              <span>Project</span>
              <div class="dropdown_icon"></div>
            </a>
            <ul class="sidebar_menu sidebar_menu_dropdown_content">
              <li>
                <a href="#">List</a>
              </li>
              <li>
                <a href="#">Add Project</a>
              </li>
            </ul>
          </li>
          <li class="sidebar_submenu">
            <a href="#" class="sidebar_menu_dropdown">
              <i class="bx bx-category"></i>
              <span>E-Commerce</span>
              <div class="dropdown_icon"></div>
            </a>
            <ul class="sidebar_menu sidebar_menu_dropdown_content">
              <li>
                <a href="#">List product</a>
              </li>
              <li>
                <a href="#">Add Product</a>
              </li>
              <li>
                <a href="#">orders</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i class="bx bx-mail-send"></i>
              <span>mail</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="bx bx-chat"></i>
              <span>chat</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="bx bxs-calendar"></i>
              <span>calendar</span>
            </a>
          </li>
          <li class="sidebar_submenu">
            <a href="#" class="sidebar_menu_dropdown">
              <i class="bx bx-cog"></i>
              <span>settings</span>
              <div class="dropdown_icon"></div>
            </a>
            <ul class="sidebar_menu sidebar_menu_dropdown_content">
              <li>
                <a href="#" class="darkmode_toggle" id="darkmode_toggle">
                  darkmode
                  <span class="darkmode_switch"></span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div class="main">
        <div class="main_header">
          <div class="mobile_toggle" id="mobile_toggle">
            <i class="bx bx-menu-alt-right"></i>
          </div>
          <div class="main_title">Dropdown sidebar</div>
        </div>
        <div class="main_content">
          <div class="row">
            <div class="col_3 col_md-6 col_sm_12">
              <div class="box box_hover">
                <div class="counter">
                  <div class="counter_title">total order</div>
                  <div class="counter_info">
                    <div class="counter_count">6578</div>
                    <i class="bx bx-shopping-bag"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col_3 col_md-6 col_sm_12">
              <div class="box box_hover">
                <div class="counter">
                  <div class="counter_title">conversion rate</div>
                  <div class="counter_info">
                    <div class="counter_count">30.5%</div>
                    <i class="bx bx-chat"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col_3 col_md-6 col_sm_12">
              <div class="box box_hover">
                <div class="counter">
                  <div class="counter_title">total profit</div>
                  <div class="counter_info">
                    <div class="counter_count">$9,780</div>
                    <i class="bx bx-line-chart"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col_3 col_md-6 col_sm_12">
              <div class="box box_hover">
                <div class="counter">
                  <div class="counter_title">daily visitors</div>
                  <div class="counter_info">
                    <div class="counter_count">690</div>
                    <i class="bx bx-user"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col_3 col_md_6 col_sm_12">
              <div class="box f_height">
                <div class="box_header">top product</div>
                <div class="box_body">
                  <ul class="product_list">
                    <li class="product_list_item">
                      <div class="item_info">
                        <img src="image/ao.jpg" alt="" />
                        <div class="item_name">
                          <div class="product_name">Jacket</div>
                          <div class="text_second">Cloths</div>
                        </div>
                      </div>
                      <div class="item_sale_info">
                        <div class="text_second">Sales</div>
                        <div class="product_sales">$5,930</div>
                      </div>
                    </li>
                    <li class="product_list_item">
                      <div class="item_info">
                        <img src="image/ao.jpg" alt="" />
                        <div class="item_name">
                          <div class="product_name">Sneaker</div>
                          <div class="text_second">Cloths</div>
                        </div>
                      </div>
                      <div class="item_sale_info">
                        <div class="text_second">Sales</div>
                        <div class="product_sales">$5,930</div>
                      </div>
                    </li>
                    <li class="product_list_item">
                      <div class="item_info">
                        <img src="image/ao.jpg" alt="" />
                        <div class="item_name">
                          <div class="product_name">Headphone</div>
                          <div class="text_second">Devices</div>
                        </div>
                      </div>
                      <div class="item_sale_info">
                        <div class="text_second">Sales</div>
                        <div class="product_sales">$5,930</div>
                      </div>
                    </li>
                    <li class="product_list_item">
                      <div class="item_info">
                        <img src="image/ao.jpg" alt="" />
                        <div class="item_name">
                          <div class="product_name">Backpack</div>
                          <div class="text_second">Bags</div>
                        </div>
                      </div>
                      <div class="item_sale_info">
                        <div class="text_second">Sales</div>
                        <div class="product_sales">$5,930</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col_4 col_md_6 col_sm_12">
              <div class="box f_height">
                <div class="box_body">
                  <div id="category_chart"></div>
                </div>
              </div>
            </div>
            <div class="col_5 col_md_12 col_sm_12">
              <div class="box f_height">
                <div class="box_header">customers</div>
                <div class="box_body">
                  <div id="customer_chart"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col_12">
              <div class="box">
                <div class="box_header">Recent orders</div>
                <div class="box_body overflow_scroll">
                  <table>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Order status</th>
                        <th>Payment status</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#2345</td>
                        <td>
                          <div class="order_owner">
                            <img src="image/img-avatar.png" alt="" />
                            <span>hoang the duong</span>
                          </div>
                        </td>
                        <td>2023-02-28</td>
                        <td>
                          <span class="order_status order_ready">Ready</span>
                        </td>
                        <td>
                          <div class="payment_status payment_pending">
                            <div class="dot"></div>
                            <span>Pending</span>
                          </div>
                        </td>
                        <td>#123.45</td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td>#2345</td>
                        <td>
                          <div class="order_owner">
                            <img src="image/img-avatar.png" alt="" />
                            <span>HTD</span>
                          </div>
                        </td>
                        <td>2023-02-28</td>
                        <td>
                          <span class="order_shipped order_ready">Shipped</span>
                        </td>
                        <td>
                          <div class="payment_shipped payment_pending">
                            <div class="dot"></div>
                            <span>Pad</span>
                          </div>
                        </td>
                        <td>#123.45</td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td>#2345</td>
                        <td>
                          <div class="order_owner">
                            <img src="image/img-avatar.png" alt="" />
                            <span>HTD</span>
                          </div>
                        </td>
                        <td>2023-02-28</td>
                        <td>
                          <span class="order_shipped order_ready">Shipped</span>
                        </td>
                        <td>
                          <div class="payment_shipped payment_pending">
                            <div class="dot"></div>
                            <span>Pad</span>
                          </div>
                        </td>
                        <td>#123.45</td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td>#2345</td>
                        <td>
                          <div class="order_owner">
                            <img src="image/img-avatar.png" alt="" />
                            <span>HTD</span>
                          </div>
                        </td>
                        <td>2023-02-28</td>
                        <td>
                          <span class="order_shipped order_ready">Shipped</span>
                        </td>
                        <td>
                          <div class="payment_shipped payment_pending">
                            <div class="dot"></div>
                            <span>Pad</span>
                          </div>
                        </td>
                        <td>#123.45</td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td>#2345</td>
                        <td>
                          <div class="order_owner">
                            <img src="image/img-avatar.png" alt="" />
                            <span>HTD</span>
                          </div>
                        </td>
                        <td>2023-02-28</td>
                        <td>
                          <span class="order_shipped order_ready">Shipped</span>
                        </td>
                        <td>
                          <div class="payment_shipped payment_pending">
                            <div class="dot"></div>
                            <span>Pad</span>
                          </div>
                        </td>
                        <td>#123.45</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="overlay"></div>
      </div>
    </>
  );
}

export default App;
