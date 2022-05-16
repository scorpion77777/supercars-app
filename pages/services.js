import { Navbar } from "../components/Navbar";
import Card from "../components/Card";

export default function Service() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3 md:text-sm mt-8 p-4">
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
