import Link from "next/link";

export default function Home() {
  let name = "서수완";

  return (
    <div>
      
      <h4 className="title">애플후레시</h4>
      <p className="title-sub">by dev {name}</p>
      {/* 데이터 바인딩 {name} */}
    </div>
  );
}
