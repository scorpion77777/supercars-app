import { Navbar } from "../components/Navbar";
import Card from "../components/Card";

export default function Service() {
  return (
    <>
      <Navbar />
      <div className="flex flex-row items-center mt-12 justify-between">
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
