import React, { Suspense } from "react";
// @ts-ignore
import ReactDOM from "react-dom/client";

import "./index.scss";
import Main from "./components/Main";
import Card from "card/Card";

const LazyCardProvider = React.lazy(() => import("state/CardsProvider"));

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: root-config</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
    <div className="p-6">
      <Suspense fallback="loading">
        <LazyCardProvider>
          <Main />
        </LazyCardProvider>
      </Suspense>
    </div>
  </div>
);

const app = document.getElementById("app");
const root = ReactDOM.createRoot(app)
root.render(<App />);
