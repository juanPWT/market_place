const TextGradient = (prop) => {
  return (
    <h1
      className={`font-bold  ${prop.size} bg-gradient-to-l from-fuchsia-400 via-purple-500 to-sky-600 text-transparent bg-clip-text`}
    >
      {prop.child}
    </h1>
  );
};

export default TextGradient;
