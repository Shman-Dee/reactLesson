// import HelloWorld from "./components/HelloWorld";
// import JsxVariables from "./components/JsxVariables";
// import Greeter from './components/Greeter'

import { HelloWorld, JsxVariables, Greeter, List } from "./components";

export const App = () => {
  const students = ["stephen", "andy", "zach"];
  const cryptosFav = ["btc", "eth", "atom"];

  return (
    <div>
      <List items ={students}/>
      <List items ={cryptosFav}/>
      <HelloWorld />
      <JsxVariables />
      <Greeter
        name="andy"
        age={38}
        isHungry
        isFalse={false}
        favoriteCryptos={["btc", "eth", "mana"]}
        pcSpecs={{
          gpu: "3090",
          cpu: "i12",
        }}
        myFn={() => console.log("we out her brah")}
      />
      <Greeter name="zach" />
      
    </div>
  );
};

export default App;
