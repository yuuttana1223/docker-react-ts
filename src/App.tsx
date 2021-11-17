type AppProps = {
  message: string;
  description?: string;
};

export const App: React.FunctionComponent<AppProps> = ({
  message,
}: AppProps) => {
  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
};

App.defaultProps = {
  message: "Hello defaultProps!",
  description: "This is App Component",
};
