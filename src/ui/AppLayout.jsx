import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
import OrderSearch from "../features/order/OrderSearch";


function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state;
  console.log(isLoading);
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading === "loading" && <Loader />}
      {/* <Loader/> */}
      <Header />
      <div className="overflow-y-auto">
        {" "}
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
