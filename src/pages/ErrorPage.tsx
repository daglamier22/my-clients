import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ErrorPage() {
  return (
    <>
      <Header />
      <main>
        <h1>An error occured!</h1>
        <p>Could not find this page!</p>
      </main>
      <Footer />
    </>
  );
}
