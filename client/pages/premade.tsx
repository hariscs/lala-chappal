import { Wrapper } from "@components/Wrapper";
import { Header } from "@container/Header";
import Head from "next/head";

export default function Premade() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <section className="pt-[96px] pb-[171px]">
        <Wrapper>
          <h2 className="flex items-center justify-center text-6xl text-primary font-semibold">
            Premade Chappals Are Coming Soon
          </h2>
        </Wrapper>
      </section>
    </>
  );
}