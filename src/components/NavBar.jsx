import NavBarItem from "./NavbarItem";


export default function NavBar() {
  return (
    <div className ="flex justify-center p-4 dark:bg-gray-600 bg-amber-100 lg:text-lg">
    <NavBarItem title="Trending" param="fetchTrending" />
    <NavBarItem title="Top Rated" param="fetchTopRated" />
    </div>
  )
}
