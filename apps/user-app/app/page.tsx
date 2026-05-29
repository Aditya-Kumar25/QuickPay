
import styles from "./page.module.css";
import { Button } from "@repo/ui/button";

export default function Home() {
  return (
    <div className={"text-bold text-3xl bg-red-500"}>
    hello
    <Button className={"px-4 py-2 rounded-lg bg-blue-600"}/>
    </div>
  );
}
