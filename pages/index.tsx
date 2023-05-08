import { GetServerSideProps, NextPage } from "next";
import ProdutsPage from "./ProdutsPage";
import { getProduts } from "@/api/apis";
import { Datum } from "@/Types/ProdutsType";
import styles from "@/styles/Home.module.css";
import Head from "next/head";


type HomeProps = {
  Produts: Datum
}

const Home: NextPage<HomeProps> = ({ Produts }) => {
  console.log(Produts)
  return (
    <>
      <Head>
        <title>Print e-com</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <ProdutsPage Produts={Produts} />
        </div>
      </main>
    </>

  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const Produts = await getProduts()
  console.log(Produts)
  return {
    props: { Produts }
  }
}
export default Home
