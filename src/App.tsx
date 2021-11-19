import { Counter } from "./Counter";
import { CounterWithReducer } from "./CounterWithReducer";

type AppProps = {
  message: string;
  description?: string;
};

export const App: React.FunctionComponent<AppProps> = ({
  message,
}: AppProps) => {
  return (
    <div className="App">
      {/* <Counter /> */}
      <CounterWithReducer />
    </div>
  );
};

App.defaultProps = {
  message: "Hello defaultProps!",
  description: "This is App Component",
};
