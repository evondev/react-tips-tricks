import UserProfile from "./components/user-profile";

const name = "evondev";
const ITEMS = [1, 2, 3, 4, 5];
function App() {
  return (
    <div className="flex items-center gap-2">
      <>
        {ITEMS.length > 0 && (
          <UserProfile
            isAdmin={false}
            age={32}
            avatar={`https://abc.co/name=${name}`}
          />
        )}
      </>
    </div>
  );
}

export default App;
