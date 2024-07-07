import { Metadata } from "next";

// components
import { DataSetInternal } from "@/components/organisms";

type ProductPageProps = {
  params: { p_key: string };
};

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const key = params.p_key;
  return {
    title: key.toUpperCase(),
  };
}

const Product = ({ params }: ProductPageProps) => {
  return <DataSetInternal productKey={params.p_key} />;
};

export default Product;
