import Dropdown from "./Dropdown";

export default function App() {
  const options = [
    { value: "green", label: "Green" },
    { value: "blue", label: "Blue" },
    { value: "red", label: "Red" },
    { value: "yellow", label: "Yellow" },
    { value: "orange", label: "Orange" },
    { value: "pink", label: "Pink" },
    { value: "purple", label: "Purple" },
    { value: "grey", label: "Grey" }
  ];

  return (
    <div className="App flex items-center justify-center h-screen">
      <Dropdown
        className=""
        isSearchable
        isMulti
        placeHolder="Select..."
        options={options}
        onChange={(value) => console.log(value)}
      />
    </div>
  );
}
