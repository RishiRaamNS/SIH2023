import App from "./index";
import { Inter } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <main className={inter.className}>
      <App />
    </main>
  );
}
