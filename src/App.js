import { Route, Switch } from "react-router-dom";

import { EvenNumber } from "./EvenNumber";
import { consecutive } from "./consecutive";
import { Duplicate } from "./Duplicate";
import { FatchApi } from "./Fatch";
import { Menu } from "./Menu";
import { ObjectSort } from "./objectsort";
import { TodoList } from "./TodoList";

function App() {
  return (
    <div className="App">
      <Menu />
      <Switch>
        <Route exact path="/" component={EvenNumber} />
        <Route exact path="/consecutive" component={consecutive} />
        <Route exact path="/duplicate" component={Duplicate} />
        <Route exact path="/fatchapi" component={FatchApi} />
        <Route exact path="/objectsort" component={ObjectSort} />
        <Route exact path="/todolist" component={TodoList} />
      </Switch>
    </div>
  );
}

export default App;
