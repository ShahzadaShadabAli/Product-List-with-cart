import Cart from "./components/Cart";
import LeftSection from "./components/LeftSection";

function App() {
  return (
    <div className="flex justify-center max-sm:pb-7 pb-20 bg-[#fcf8f5]">
 
      <div className="w-[88%] flex justify-center max-sm:flex-col gap-8 mt-14 max-sm:mt-7">
        <LeftSection />
        <Cart />
      </div>
    </div>
  );
}

export default App;
