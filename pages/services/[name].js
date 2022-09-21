import { ServiceData } from "../../data/services";
import Navbar from "../../components/Navbar";
import Head from "next/head";
import Footer from "../../components/Footer";

export const getStaticPaths = () => {
  const data = ServiceData;

  const paths = data.map((service) => {
    return {
      params: { name: service.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const slug = context.params.name;

  const service_data = ServiceData.find((data) => data.slug === slug);

  const data = JSON.stringify(service_data);
  return {
    props: { service_data: data },
  };
};

const ServicesDetails = ({ service_data }) => {
  const data = JSON.parse(service_data);
  return (
    <div className=" overflow-x-hidden">
      <Head>
        <title>The wolf's agency</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="pt-3 px-12">
        <span>
          <h1
            data-aos="fade-left"
            className="font-semibold text-gray-600 text-2xl uppercase"
          >
            {data.title}
          </h1>
          <hr className="h-2 w-16 bg-orange-500 my-2" />
        </span>
        <span>{data.explanation}</span>
      </div>
      <div className="fixed bottom-0">
        <Footer />
      </div>
    </div>
  );
};

export default ServicesDetails;
