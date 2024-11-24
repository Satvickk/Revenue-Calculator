import Header from "./component/Header";
import UserForm from "./component/UserForm";
import View from "./component/user-view/View";

export default function Container() {
  return (
    <div className="w-full sm:max-w-7xl sm:mx-auto sm:h-full bg-white rounded-2xl px-4 grid sm:grid-rows-9 gap-4">
      <div className="row-span-2 grid my-auto">
        <Header />
      </div>
      <div className="row-span-7 py-2 grid sm:grid-cols-3 gap-4 h-full">
        <UserForm />
        <View />
      </div>
    </div>
  );
}
