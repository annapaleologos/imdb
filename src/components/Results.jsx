import Card from "./Card";

export default function Results({ results }) {
  return (
    <div className="flex flex-col max-w-6xl gap-6 p-4 mx-auto sm:gap-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:px-0">
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
}
