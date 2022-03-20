import shop from "./pages/shop";
import device from "./pages/device";
import main from "./pages/main";
import {DEVICE_ROUTE, MAIN_ROUTE, SHOP_ROUTE} from "./utils/consts";

export const allRoutes = [
    {
      path: MAIN_ROUTE,
      Component: main
    },
    {
        path: SHOP_ROUTE,
        Component: shop
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: device
    }
]