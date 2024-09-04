function Lightbulb(props) {
  return (
    <div>
      <div
        className="bulb"
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: props.glowing ? "yellow" : "black",
        }}
      ></div>
    </div>
  );
}
export default Lightbulb
