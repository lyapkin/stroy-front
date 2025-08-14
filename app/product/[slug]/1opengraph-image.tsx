import { getProductDetailApi } from "@/src/entities/product/api";
import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/webp";

// Image generation
export default async function Image({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const product = await getProductDetailApi(slug);
  const imageUrl =
    product.images.length > 0 ? product.images[0].url : "/images/logo-pic.png";
  console.log("here", imageUrl);
  console.log(imageUrl);

  // const response = await fetch(process.env.BACK_URL + "/media/" + imageUrl);
  // const image = await response.arrayBuffer();

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          // background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          alt=""
          src={imageUrl}
          width={1200}
          height={600}
          style={{ objectFit: "contain", height: "100%", width: "100%" }}
        />
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
