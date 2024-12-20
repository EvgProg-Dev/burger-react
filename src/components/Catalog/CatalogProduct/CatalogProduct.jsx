import { useDispatch } from "react-redux";
import { API_URI } from "../../../const";
import style from "./CatalogProduct.module.css";
import { addProduct } from "../../../Store/order/orderSlice";

export const CatalogProduct = ({ id, image, price, title, weight }) => {
    const dispatch = useDispatch();
    return (
        <article className={style.product}>
            <img
                src={`${API_URI}/${image}`}
                alt={title}
                className={style.image}
            />
            <p className={style.price}>
                {price}
                <span className="currency">₽</span>
            </p>
            <h3 className={style.title}>
                <button className={style.detail}>{title}</button>
            </h3>
            <p className={style.weight}>{weight}г</p>
            <button
                className={style.add}
                type="button"
                onClick={() =>
                    dispatch(
                        addProduct({
                            id,
                        })
                    )
                }
            >
                Добавить
            </button>
        </article>
    );
};
