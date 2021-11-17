type AppProps = {
  message: string;
};

export const App = ({ message }: AppProps) => {
  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
};
