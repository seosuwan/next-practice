import Link from "next/link";

export default function Cart() {
  const basket = ["Tomatoes", "Cucumbers", "Kale", "Potatoes", "Carrots"];
  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem basket={basket[0]} />
      <CartItem basket={basket[1]} />
      <CartItem />
      <CartItem />
      <Link href="/cart/payment">결제하기</Link>
      <Button />
    </div>
  );
}
function CartItem(props) {
  return (
    <div className="cart-item">
      <p>{props.basket}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}

function Button() {
  return <button style={{ color: "red" }}>버튼</button>;
}
