import { Metadata } from "next";

// components
import { DataSetInternal } from "@/components/organisms";

type Props = {
  params: { p_key: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const key = params.p_key;
  return {
    title: key.toUpperCase(),
  };
}

const Product = ({ params }: Props) => {
  return <DataSetInternal productKey={params.p_key} />;
};

export default Product;
