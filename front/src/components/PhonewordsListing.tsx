export default function PhonewordsListing({ words }: { words: string[] }) {
  return (
    <div className="flex flex-wrap ">
      {words.map((word) => (
        <span key={word} className="p-2 m-3 text-white bg-green-800 rounded-lg">
          {word}
        </span>
      ))}
    </div>
  );
}
