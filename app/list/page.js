import Image from "next/image";
export default function List() {
  let product = ["Tomatoes", "Cucumbers", "Kale", "Potatoes", "Carrots"];
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {product.map((item, index) => {
        return (
          <>
            <div className="food" key={index}>
              <Image
                src={`/images/${item}.jpg`}
                width={100}
                height={100}
                alt="food"
                className="food-img"
              ></Image>
              <h4>
                {item} {`${40 + index}$`}
              </h4>
            </div>
          </>
        );
      })}
    </div>
  );
}
