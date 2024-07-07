import { Metadata } from "next";

// components
import { DataSetInternal } from "@/components/organisms";

type Props = {
  params: { key: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const key = params.key;
  return {
    title: key.toUpperCase(),
  };
}

const Product = () => {
  return <DataSetInternal />;
};

export default Product;
