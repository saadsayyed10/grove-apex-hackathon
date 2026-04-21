import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/react";

const App = () => {
  return (
    <>
      <header>
        <Show when="signed-out">
          <SignInButton mode="modal" />
        </Show>
        <Show when="signed-in">
          <SignUpButton />
          <UserButton />
        </Show>
      </header>
    </>
  );
};

export default App;
