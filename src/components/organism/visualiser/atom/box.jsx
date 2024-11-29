const Box = ({ color, width, height, value }) => {
  return (
    <>
      <div
        className="mt-auto flex items-center justify-center rounded"
        style={{
          backgroundColor: color,
          width: width + "%",
          height: height + "px",
        }}
      >
        <div className="mt-auto text-sm">{value}</div>
      </div>
    </>
  );
};

export default Box;
