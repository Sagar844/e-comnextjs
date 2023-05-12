import { GetServerSideProps, NextPage } from "next";
import ProdutsPage from "./ProdutsPage";
import { getProduts } from "@/api/apis";
import { Datum } from "@/Types/ProdutsType";
import styles from "@/styles/Home.module.css";
import Head from "next/head";
import Input from "@/InputHoc/Input";
import { FieldValues, useForm } from "react-hook-form";
import { DetailedHTMLProps, FormHTMLAttributes } from "react";


type HomeProps = {
  Produts: Datum,
  form: DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>
}

const Home: NextPage<HomeProps> = ({ Produts }) => {
  console.log(Produts)



  const {
    register,
    handleSubmit,
    formState: {
      errors,
    }
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',

    }
  });

  return (
    <>
      <Head>
        <title>Print e-com</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <ProdutsPage Produts={Produts} />

          <Input label="name" id="name" register={register} errors={errors} required />



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
