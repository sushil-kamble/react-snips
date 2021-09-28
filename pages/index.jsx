import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const pages = [
    {
      name: "Counter",
      link: "/counter"
    },
    {
      name: "Two Way Data Binding",
      link: "/two-way-data-binding"
    },
    {
      name: "Toggle DOM",
      link: "/toggler"
    },
    {
      name: "Dropdown",
      link: "/dropdown"
    },
    {
      name: "Form Submit",
      link: "/form-submit"
    },
    {
      name: "Use Effect Hook in Action / Api Call",
      link: "/use-effect-in-action"
    },
    {
      name: "Counter by Class Example",
      link: "/counter-by-class"
    },
    {
      name: "Calculator",
      link: "/calculator"
    }
  ];

  return (
    <div>
      <Head>
        <title>Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {pages.map(x => (
          <div key={x.link} className="px-4 my-2 bg-gray-200 rounded-lg">
            <Link href={x.link}>
              <h2 className="cursor-pointer">{x.name}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
