import { Counter } from "./Counter";

type AppProps = {
  message: string;
  description?: string;
};

export const App: React.FunctionComponent<AppProps> = ({
  message,
}: AppProps) => {
  return (
    <div className="App">
      <Counter />
    </div>
  );
};

App.defaultProps = {
  message: "Hello defaultProps!",
  description: "This is App Component",
};
