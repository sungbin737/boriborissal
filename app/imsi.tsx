function Message() {
  return (
    <div className="m-4 flex max-w-sm items-center space-x-4 rounded-xl bg-sky-800 p-6 text-white">
      <img className="h-12 w-12" src="/logo.svg" />
      <div>
        <div className="text-xl">Welcome to SWS</div>
        <div>This is a message from the SWS team.</div>
      </div>
    </div>
  );
}

export default function Home() {
  return <Message />;
}
