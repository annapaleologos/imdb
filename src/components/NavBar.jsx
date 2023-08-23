import NavBarItem from "./NavBarItem";

export default function Navbar() {
  return (
    <div className="flex justify-center p-4 dark:bg-gray-600 bg-amber-100 lg:text-lg">
      <NavBarItem title="Trending" param="fetchTrending" />
      <NavBarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
}
