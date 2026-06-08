import { useEffect } from "react";


function Spline() {
     useEffect(() => {
        const script = document.createElement("script");
        script.src =
          "https://unpkg.com/@splinetool/viewer@1.12.94/build/spline-viewer.js";
        script.type = "module";
        script.async = true;
    
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);
    
      return (
        <div style={{ width: "100vw", height: "100vh", padding: 10, paddingBlockStart: 100}}>
{/* <spline-viewer url="https://prod.spline.design/lUZH420DNp1jwKtN/scene.splinecode"></spline-viewer> */}
<spline-viewer url="https://prod.spline.design/lUZH420DNp1jwKtN/scene.splinecode"></spline-viewer>
        </div>

        // <script type="module" src="https://unpkg.com/@splinetool/viewer@1.12.94/build/spline-viewer.js"></script>
      );
}

export default Spline