import Breadcrumbs from "../components/Breadcrumbs";

const CartPage = () => {
  return (
    <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      <Breadcrumbs depth1="홈" depth2="장바구니" />
      <div className="mt-6 md:mt-14 px-2 lg:px-0">
        <div>
          <h1 className="text-2xl">장바구니에 물품이 없습니다.</h1>
          <a className="btn btn-primary mt-10" href="/">
            담으러 가기
          </a>
        </div>
        <div className="lg:flex justify-between mb-20">
          <div></div>
          <div className="self-start shrink-0 flex items-center mt-10 mb-20">
            <span className="text-xl md:text-2xl">총 : $0</span>
            <label
              // for="confirm-modal"
              className="modal-button btn btn-primary ml-5">
              구매하기
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
