import TextGradient from "./components/TextGradient";

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="m-auto flex flex-col justify-center items-center gap-2">
        <TextGradient size={"text-5xl"} child={"Oppss..."} />
        <p className="text-gray-200 text-xs font-thin">Page not found</p>
      </div>
    </div>
  );
};

export default PageNotFound;
