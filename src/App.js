import Contador from "./components/Contador";
import ContadorOptimizado from "./components/ContadorOptimizado";
import ShoppingCard from "./components/ShoppingCart";
import CrudAPI from "./components/CrudAPI";
function App() {
  return (
    <div>
      <h2>use Reducers CRUD API</h2>
      <CrudAPI />
      <h2>use Reducers Shopping Cart</h2>
      <ShoppingCard />
      <hr />
      <h2>use Reducers Optimized</h2>
      <ContadorOptimizado />
      <hr />
      <h2>use Reducers</h2>
      <Contador />
      <hr />
    </div>
  );
}

export default App;
