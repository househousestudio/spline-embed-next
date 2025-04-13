// pages/index.js
export default function Home() {
  return (
    <div>
      <spline-viewer
        loading-anim-type="none"
        url="https://prod.spline.design/iV5c0C5xgfzCBwVR/scene.splinecode"
        style={{ width: "100vw", height: "100vh", display: "block" }}
      ></spline-viewer>
      <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js"></script>
      <script type="module" src="/init.js"></script>
    </div>
  );
}