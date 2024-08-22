import { FC, useState } from "react";
import styles from "./LikeButton.module.scss";

const LikeButton: FC = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    if (isLiked) {
      setIsLiked(false);
      setCount((prevCount) => prevCount - 1);
    } else {
      setIsLiked(true);
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <button
      className={`${styles["button"]} ${isLiked ? styles["is-liked"] : ""}`}
      onClick={handleClick}
      aria-pressed={isLiked}
      aria-label={`Like ${isLiked ? "d" : ""} (${count} likes)`}
    >
      Like | {count}
    </button>
  );
};

export default LikeButton;
