export interface IOverLayGridProps {
  title: string;
}
export const OverLayGrid: React.FC<IOverLayGridProps> = (props) => {
  return (
    <div
      style={{
        position: "relative",
        background: "white",
        height: "166px",
        cursor: "grabbing",
      }}
    >
      {/* <div
				id="overlay-grid" ref={ref}
				style={{background: "white", height: "100px",opacity: 0.1}}
				dangerouslySetInnerHTML={{ __html: props.dom.outerHTML }}
			/> */}
      <label
        style={{
          position: "absolute",
          fontWeight: "bold",
          top: "50%",
          left: "50%",
          transform: " translate(-50%, -50%);",
          fontSize: "14px",
          zIndex: 100,
        }}
      >
        {props.title}
      </label>
    </div>
  );
};
