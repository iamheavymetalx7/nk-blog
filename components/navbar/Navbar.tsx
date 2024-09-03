import DarkMode from "./DarkMode";
import NameComponent from "./NameComponent";
import NavTopics from "./NavTopics";
export function Navbar() {
  return (
    <>
      <NameComponent></NameComponent>
      <nav>
        <div className="container flex flex-row  justify-between text-lg">
          <NavTopics />
          {/* <div className="items-center">
            <DarkMode />
          </div> */}
        </div>
      </nav>
    </>
  );
}
export default Navbar;
