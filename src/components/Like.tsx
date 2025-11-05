import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  isLike: boolean;
  onClick?: () => void;
}

const Like = ({ isLike, onClick }: Props) => {
  return (
    <>
      {isLike ? (
        <AiFillHeart size="40" onClick={onClick} color="red" />
      ) : (
        <AiOutlineHeart size="40" onClick={onClick} color="gray" />
      )}
    </>
  );
};

export default Like;
